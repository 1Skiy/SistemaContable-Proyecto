const con = require("../database/db")

class productoModel {

    Mostrar_todos(){
        return new Promise((resolve, reject)=>{
            con.query(
                "SELECT * FROM productos",
                function (error, results) {
                    if (error) {

                        reject(error);
                    }
                  resolve(results)
                }
            )
        })
    }

    registro(producto){
        return new Promise((resolve, reject)=>{
            console.log(producto)
            con.query("INSERT INTO productos (Nombre, Precio, Stock) VALUES (?,?,?)",
            [producto.Nombre, producto.Precio, producto.Stock],
            function (error, results, fields) {
               if (!error) {
                 resolve("Se ha Registrado el producto")
               } else {
                reject(error)
               }
            })
        })
    }

    editar(producto){
        return new Promise((resolve, reject)=>{
            console.log(producto)
            con.query("UPDATE productos SET Precio=?, Stock=? WHERE productos.id=?", [producto.Precio, producto.Stock, producto.id], 
            function (error, results, fields) {
               if (!error) {
                 resolve("Se ha Actualizado el producto")
               } else {
                reject(error)
               }
            })
        })
    }

    eliminar(producto){
        return new Promise((resolve, reject)=>{
            console.log(producto)
            con.query("DELETE FROM productos WHERE id = ?", [producto.id], 
            function (error, results, fields) {
               if (!error) {
                 resolve(true)
               } else {
                reject(error)
               }
            })
        })
    }
}
module.exports = new productoModel();