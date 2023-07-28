const con = require("../database/db")

class clienteModel {
    Mostrar_todos(){
        return new Promise((resolve, reject)=>{
            con.query(
                "SELECT * FROM cliente",
                function (error, results) {
                    if (error) {

                        reject(error);
                    }
                  resolve(results)
                }
            )
        })
    }

    Mostrar_por_cedula(clientes){
        return new Promise((resolve, reject)=>{
            console.log(clientes)
            con.query(
                "SELECT * FROM cliente WHERE Cedula=?", [clientes.Cedula],
                function (error, results) {
                    if (error) {

                        reject(error);
                    }
                  resolve(results)
                }
            )
        })
    }


    registro(clientes){
        return new Promise((resolve, reject)=>{
            console.log(clientes)
            con.query("INSERT INTO cliente (Nombre, Apellido, Cedula) VALUES (?,?,?)",
            [clientes.Nombre, clientes.Apellido,clientes.Cedula],
            function (error, results, fields) {
               if (!error) {
                 resolve("Se ha registrado el cliente")
               } else {
                reject(error)
               }
            })
        })
    }
}
module.exports = new clienteModel();