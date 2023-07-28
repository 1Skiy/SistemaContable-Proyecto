const con = require("../database/db")

class proveedorModel {

    Mostrar_todos(){
        return new Promise((resolve, reject)=>{
            con.query(
                "SELECT * FROM proveedor",
                function (error, results) {
                    if (error) {

                        reject(error);
                    }
                  resolve(results)
                }
            )
        })
    }

    registro(proveedors){
        return new Promise((resolve, reject)=>{
            console.log(proveedors)
            con.query("INSERT INTO proveedor (Nombre, Telefono, RIF) VALUES (?,?,?)",
            [proveedors.Nombre, proveedors.Telefono, proveedors.RIF],
            function (error, results, fields) {
               if (!error) {
                 resolve("Se ha Registrado el proveedor")
               } else {
                reject(error)
               }
            })
        })
    }

    editar(proveedors){
        return new Promise((resolve, reject)=>{
            console.log(proveedors)
            con.query("UPDATE proveedor SET Nombre=?, Telefono=?, RIF=? WHERE proveedor.id=?", [proveedors.Nombre, proveedors.Telefono, proveedors.RIF, proveedors.id], 
            function (error, results, fields) {
               if (!error) {
                 resolve("Se ha Actualizado el proveedor")
               } else {
                reject(error)
               }
            })
        })
    }
}
module.exports = new proveedorModel();