const redis = require("redis")
const client = redis.createClient('6379', '127.0.0.1')

// redis 链接错误
client.on("error", (error) => {
    console.log(error)
})

/**
 * 设置redis 的 hash 值
 * @param {*string} store #redis 对应的库
 * @param {*string} name   #要存入库的对象的名称
 * @param {*object} data  #对应要存入库的对象
 */
exports.setRedisHash = (store, name, data) => {
    return new Promise((resolve, reject) => {
        client.select(store, (error) => {
            if (error) {
                reject(error)
            } else {
                // hmset
                client.hmset(name, data, (error, res) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve(res)
                    }
                    client.end()
                })
            }
        })
    })
}

/**
 * 获取redis中的hash值
 * @param {*string} store #对应的redis库
 * @param {*string} name  #要获取的对象的名称
 * @param {*string} key   #对象的某个属性
 */
exports.getRedisHash = (store, name, key) => {
    return new Promise((resolve, reject) => {
        client.select(store, (error) => {
            if(error) {
                reject(error)
            } else {
                // hmget
                client.hmget(name, key, (error, res) => {
                    if(error) {
                        reject(error)
                    } else {
                        resolve(res)
                    }
                    // 关闭链接
                    client.end()
                })
            }
        })
    })
}

/**
 * 获取redis中所有hash值
 * @param {*string} store #对应的redis库
 * @param {*string} name  #要获取的对象的名称
 */
exports.allRedisHash = (store, name) => {
    return new Promise((resolve, reject) => {
        client.select(store, (error) => {
            if(error) {
                reject(error)
            } else {
                // hgetall
                client.hgetall('site', (error, res) => {
                    if(error) {
                        reject(error)
                    } else {
                        resolve(res)
                    }
                    // 关闭链接
                    client.end()
                })
            }
        })
    })
}