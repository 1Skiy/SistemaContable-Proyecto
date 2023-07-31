const con = require("../database/db")

class librodiariomodel {
    Mostrar_todos(){
        return new Promise((resolve, reject)=>{
            con.query(
                "SELECT * FROM librodiario",
                function (error, results) {
                    if (error) {

                        reject(error);
                    }
                  resolve(results)
                }
            )
        })
    }

    registro(librodiario){
        return new Promise((resolve, reject)=>{
            console.log(librodiario)
            con.query("INSERT INTO librodiario (fecha, descripcion, referencia) VALUES (?,?,?)",
            [librodiario.fecha, librodiario.descripcion,librodiario.referencia],
            function (error, results, fields) {
               if (!error) {
                 resolve("Se ha registrado la información del librodiario")
               } else {
                reject(error)
               }
            })
        })
    }
}
module.exports = new librodiariomodel();