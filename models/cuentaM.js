const con = require("../database/db")

class cuentaModel {
    Mostrar_todos(){
        return new Promise((resolve, reject)=>{
            con.query(
                "SELECT * FROM cuenta",
                function (error, results) {
                    if (error) {

                        reject(error);
                    }
                  resolve(results)
                }
            )
        })
    }


    registro(cuentas){
        return new Promise((resolve, reject)=>{
            console.log(cuentas)
            con.query("INSERT INTO cuenta (Nombre, Tipo, Estado) VALUES (?,?,?)",
            [cuentas.Nombre, cuentas.Tipo,cuentas.Estado],
            function (error, results, fields) {
               if (!error) {
                 resolve("Se ha registrado la cuenta")
               } else {
                reject(error)
               }
            })
        })
    }


    editar(cuentas){
        return new Promise((resolve, reject)=>{
            console.log(cuentas)
            con.query("UPDATE cuenta SET Tipo=?, Estado=? WHERE cuenta.id=?", [cuentas.Tipo, cuentas.Estado, cuentas.id], 
            function (error, results, fields) {
               if (!error) {
                 resolve("Se ha Actualizado la cuenta")
               } else {
                reject(error)
               }
            })
        })
    }

    eliminar(cuentas){
        return new Promise((resolve, reject)=>{
            console.log(cuentas)
            con.query("DELETE FROM cuenta WHERE id = ?", [cuentas.id], 
            function (error, results, fields) {
               if (!error) {
                 resolve("Se ha Eliminado la cuenta")
               } else {
                reject(error)
               }
            })
        })
    }

}
module.exports = new cuentaModel();