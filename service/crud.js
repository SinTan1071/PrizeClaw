
exports.readMod = (mod, query) => {
    return new Promise((resolve, reject)=>{
        mod
            .findOne(query)
            .then(result => {
                resolve(result)
            })
            .catch(err => {
                reject(err)
            })
    })
}

exports.readAllMod = (mod, query) => {
    return new Promise((resolve, reject) => {
        mod
            .findAll(query)
            .then(results => {
                resolve(results)
            })
            .catch(err => {
                reject(err)
            })
    })
}

exports.createMod = (mod, data) => {
    return new Promise((resolve, reject) => {
        mod
            .create(data)
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            });
    })
}

exports.updateMod = (mod, set, query) => {
    return new Promise((resolve, reject) => {
        mod
            .update(set, query)
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            });
    })
}