const con = require("../database/db")

class transaccionmodel {
    Mostrar_todos(){
        return new Promise((resolve, reject)=>{
            con.query(
                "SELECT * FROM transaccion",
                function (error, results) {
                    if (error) {

                        reject(error);
                    }
                  resolve(results)
                }
            )
        })
    }

    registro(transaccionmodel){
        return new Promise((resolve, reject)=>{
            console.log(transaccionmodel)
            con.query("INSERT INTO transaccion (tipo, monto, fecha) VALUES (?,?,?)",
            [transaccionmodel.tipo, transaccionmodel.monto,transaccionmodel.fecha],
            function (error, results, fields) {
               if (!error) {
                 resolve("Se ha registrado la información a transaccion")
               } else {
                reject(error)
               }
            })
        })
    }

    editar(transaccion){
        return new Promise((resolve, reject)=>{
            console.log(transaccion)
            con.query("UPDATE transaccion SET tipo=?, monto=?, WHERE transaccion.id=?", [transaccion.Precio, transaccion.Stock, transaccion.id], 
            function (error, results, fields) {
               if (!error) {
                 resolve("Se ha Actualizado la transaccion")
               } else {
                reject(error)
               }
            })
        })
    }

}



module.exports = new transaccionmodel();