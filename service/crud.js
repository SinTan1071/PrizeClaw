
exports.readMod = (mod, query) => {
    return new Promise((resolve, reject)=>{
        mod
            .findOne(query)
            .then(user => {
                resolve(user)
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
            .then(users => {
                resolve(users)
            })
            .catch(err => {
                reject(err)
            })
    })
}

exports.createMod = (mod, user) => {
    return new Promise((resolve, reject) => {
        mod
            .create(user)
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