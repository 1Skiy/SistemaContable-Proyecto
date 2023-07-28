const usersModels = require("../models/usersM");

class usersControllers {
    todos() {
        return new Promise((resolve, reject)=>{
            usersModels.todos()
                .then((res)=>{
                    resolve(res)
                })
                .catch((err)=>{
                    reject(err)
                })
        })
    }
}

module.exports = new usersControllers()