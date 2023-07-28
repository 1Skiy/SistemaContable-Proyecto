const con = require("../database/db")

class facturaModel {
    Mostrar_todos(){
        return new Promise((resolve, reject)=>{
            con.query(
                "SELECT * FROM factura",
                function (error, results) {
                    if (error) {

                        reject(error);
                    }
                  resolve(results)
                }
            )
        })
    }

    Mostrar_por_dia(facturas){
        return new Promise((resolve, reject)=>{
            console.log(facturas)
            con.query(
                "SELECT * FROM factura WHERE Fecha=?", [facturas.Fecha],
                function (error, results) {
                    if (error) {

                        reject(error);
                    }
                  resolve(results)
                }
            )
        })
    }


    registro(facturas){
        return new Promise((resolve, reject)=>{
            console.log(facturas)
            con.query("INSERT INTO factura (Nombre, Fecha, Monto) VALUES (?,?,?)",
            [facturas.Nombre, facturas.Fecha,facturas.Monto],
            function (error, results, fields) {
               if (!error) {
                 resolve("Se ha Registrado la factura")
               } else {
                reject(error)
               }
            })
        })
    }

    eliminar(facturas){
        return new Promise((resolve, reject)=>{
            console.log(facturas)
            con.query("DELETE FROM factura WHERE id = ?", [facturas.id], 
            function (error, results, fields) {
               if (!error) {
                 resolve("Se ha Eliminado la factura")
               } else {
                reject(error)
               }
            })
        })
    }
}
module.exports = new facturaModel();