const con = require("../database/db")

class usersModel {
    todos(){
        return new Promise((resolve, reject)=>{
            con.query("SELECT * FROM usuarios",function (error, results, fields) {
                resolve(results)
            })
        })
    }
}

module.exports = new usersModel()