# 读写锁（读优先）

读写锁允许多个线程在同一时间读取临界资源的内容，但仅允许单个线程独占地对临界资源进行修改。

读写锁有两个层次的存取级别构成:
- 共享: 多个线程可共享锁的拥有权
- 独占（互斥）：仅有一个线程可拥有锁

## 适用场景
读多写少

## 读优先的读写锁需满足以下条件：
- 无写锁时，多个线程可共享读；
- 无写锁和读锁时，单个线程可互斥写；
- 使用写优先策略避免*写饥饿问题*。

## 部分代码
### 1. 简单封装 `mutex` 对象
@[code{4-19} cpp:no-line-numbers](../../src/examples/read_write_lock.cpp)

### 2. 读写锁对象属性
@[code{73-79} cpp:no-line-numbers](../../src/examples/read_write_lock.cpp)

:::tip
使用额外的 `writing_` 是为了保证语义上的清晰。

我们亦可以仅使用 `waiting_writers_`来判断是否有线程正在写入:
- -1: 有线程正在写入
-  0: 没有线程正在写入
- \> 0: 有线程等待写入
:::

### 3. 获取/释放读锁
@[code{30-37} cpp:no-line-numbers](../../src/examples/read_write_lock.cpp)
@[code{39-47} cpp:no-line-numbers](../../src/examples/read_write_lock.cpp)

### 4. 获取/释放写锁
@[code{49-59} cpp:no-line-numbers](../../src/examples/read_write_lock.cpp)
@[code{61-71} cpp:no-line-numbers](../../src/examples/read_write_lock.cpp)

### 5. RAII 资源管理
@[code{82-110} cpp:no-line-numbers](../../src/examples/read_write_lock.cpp)

### 6. 代码实现
:::details 完整代码
@[code](../../src/examples/read_write_lock.cpp)
:::

## `std::shared_mutex` (C++17~)
:::details 案例代码
@[code](../../src/examples/std_shared_mutex_example.cpp)
:::

### 参考连接
- [Mark 老师B站分享](https://www.bilibili.com/video/BV1fGM9zpEAn/?share_source=copy_web&vd_source=6483630e655e03a0d4a969b75c45aa60)

- [std::shared_mutex](https://en.cppreference.com/w/cpp/thread/shared_mutex.html)