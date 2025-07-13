#include <iostream>
#include <mutex>
#include <shared_mutex>
#include <syncstream>
#include <thread>
 
class ThreadSafeCounter
{
public:
    ThreadSafeCounter() = default;
 
    unsigned int get() const
    {
        std::shared_lock lock(mutex_);
        return value_;
    }

    void increment()
    {
        std::unique_lock lock(mutex_);
        ++value_;
    }
 
    void reset()
    {
        std::unique_lock lock(mutex_);
        value_ = 0;
    }
 
private:
    mutable std::shared_mutex mutex_;
    unsigned int value_{};
};