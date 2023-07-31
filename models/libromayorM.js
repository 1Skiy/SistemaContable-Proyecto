const con = require("../database/db")

class libromayormodel {
    Mostrar_todos(){
        return new Promise((resolve, reject)=>{
            con.query(
                "SELECT * FROM libromayor",
                function (error, results) {
                    if (error) {

                        reject(error);
                    }
                  resolve(results)
                }
            )
        })
    }


    registro(libromayor){
        return new Promise((resolve, reject)=>{
            console.log(libromayor)
            con.query("INSERT INTO libromayor (nombrecuenta, saldo, fecha, tipo) VALUES (?,?,?,?)",
            [libromayor.nombrecuenta, libromayor.saldo,libromayor.fecha,libromayor.tipo],
            function (error, results, fields) {
               if (!error) {
                 resolve("Se ha registrado la información del libromayor")
               } else {
                reject(error)
               }
            })
        })
    }
}
module.exports = new libromayormodel();