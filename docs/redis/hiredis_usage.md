# HiRedis Basic Usage

*Reference Link*
- [hiredis](https://github.com/redis/hiredis)

## Synchronous API

### 1. Connecting
`redisConnect` 用于与 redis 服务器建立连接。<br/>
`redisContext` 存储连接状态。
```cpp:no-line-numbers
redisContext *redisConnect(const char *ip, int port);
```

### 2. Sending Commands & Using Replies
```cpp:no-line-numbers
void *redisCommand(redisContext *c, const char *format, ...);
```

### 3. Cleaning Up
```cpp:no-line-numbers
void redisFree(redisContext *c);
```

### 4. Errors

### 5. Pipelining

## Asynchronous API

### 1. Connecting

### 2. Sending Commands

### 3. Disconnecting