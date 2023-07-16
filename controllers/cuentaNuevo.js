const cuentaNuevoM = require('../models/cuentaNuevoM');

class cuentaNuevoController {
  Mostrar_todos() {
    return new Promise((resolve, reject) => {
      cuentaNuevoM.Mostrar_todos()

       .then((res) => {
        resolve(res)
       })
       .catch((error) => { 
        reject(error)
       })

      })
  };
  
  
    registro(cuentas) {
    return new Promise((resolve, reject)=>{
        cuentaNuevoM.registro(cuentas)
            .then((res)=>{
                resolve(res)
            })
            .catch((err)=>{
                reject(err)
            })
    })
    }

    editar(cuentas){
        return new Promise((resolve, reject)=>{
            cuentaNuevoM.editar(cuentas)
                .then((res)=>{
                    resolve(res)
                })
                .catch((err)=>{
                    reject(err)
                })
        })
    }

    eliminar(cuentas){
        return new Promise((resolve, reject)=>{
            cuentaNuevoM.eliminar(cuentas)
                .then((res)=>{
                    resolve(res)
                })
                .catch((err)=>{
                    reject(err)
                })
            }
        )
    }
    
}

module.exports = new cuentaNuevoController();