#include <mutex>
#include <condition_variable>

class Lock {
public:
    void lock() {
        mtx_.lock();
    }

    void unlock() {
        mtx_.unlock();
    }

    std::mutex& get_mutex() {
        return mtx_;
    }
private:
    std::mutex mtx_;
};

/**
 * // https://www.bilibili.com/video/BV1fGM9zpEAn/?share_source=copy_web&vd_source=6483630e655e03a0d4a969b75c45aa60
 *
 * 1. 无写锁时，可读共享
 * 2. 无读无写时，可互斥写
 * 3. 写优先策略（读优先可能导致写饥饿）
 */
class ReadWriteLock {
public:
    void ReadLock() {
        std::unique_lock<std::mutex> lock(base_lock_.get_mutex());
        read_cond_.wait(lock, [&]() {
            // 获取读锁条件：没有线程正在写入或等待写入
            return !writing_ && waiting_writers_ == 0;
            });
        ++active_readers_;
    }

    void ReadUnlock() {
        std::unique_lock<std::mutex> lock(base_lock_.get_mutex());
        --active_readers_;
        // 判断是否需要唤醒等待的写线程
        // 当有线程在等待写锁时，读线程的数量只会减少！
        if (active_readers_ == 0 && waiting_writers_ > 0) {
            write_cond_.notify_one();
        }
    }

    void Writelock() {
        std::unique_lock<std::mutex> lock(base_lock_.get_mutex());
        ++waiting_writers_;

        write_cond_.wait(lock, [&]() {
            // 获取写锁条件：没有线程正在写入或读取
            return active_readers_ == 0 && !writing_;
            });
        writing_ = true;
        --waiting_writers_;
    }

    void WriteUnlock() {
        std::unique_lock<std::mutex> lock(base_lock_.get_mutex());
        writing_ = false;
        // 判断是否需要唤醒等待的写线程还是读线程
        if (waiting_writers_ > 0) {
            write_cond_.notify_one();
        }
        else {
            read_cond_.notify_all();
        }
    }
private:
    Lock base_lock_;
    std::condition_variable read_cond_;
    std::condition_variable write_cond_;

    int active_readers_ = 0; // 当前持有读锁的线程数量
    bool writing_ = false; // 判断是否有线程正在写入（维持语义清晰）
    int waiting_writers_ = 0; // 是否存在线程等待写入
};

class ReadGuard {
public:
    explicit ReadGuard(ReadWriteLock& lock) : rwlock_(lock) {
        rwlock_.ReadLock();
    }
    ~ReadGuard() {
        rwlock_.ReadUnlock();
    }

    ReadGuard(const ReadGuard&) = delete;
    ReadGuard& operator=(const ReadGuard&) = delete;
private:
    ReadWriteLock& rwlock_;
};

class WriteGuard {
public:
    explicit WriteGuard(ReadWriteLock& lock) : rwlock_(lock) {
        rwlock_.Writelock();
    }
    ~WriteGuard() {
        rwlock_.WriteUnlock();
    }

    WriteGuard(const WriteGuard&) = delete;
    WriteGuard& operator=(const WriteGuard&) = delete;
private:
    ReadWriteLock& rwlock_;
};

#include <shared_mutex>
class ThreadSafeCounter
{
public:
    ThreadSafeCounter() = default;
 
    // Multiple threads/readers can read the counter's value at the same time.
    unsigned int get() const
    {
        std::shared_lock lock(mutex_);
        return value_;
    }
 
    // Only one thread/writer can increment/write the counter's value.
    void increment()
    {
        std::unique_lock lock(mutex_);
        ++value_;
    }
 
    // Only one thread/writer can reset/write the counter's value.
    void reset()
    {
        std::unique_lock lock(mutex_);
        value_ = 0;
    }
 
private:
    mutable std::shared_mutex mutex_;
    unsigned int value_{};
};