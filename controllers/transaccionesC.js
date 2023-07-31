const transaccionModels = require('../models/transaccionesM');

class transaccionController {
  Mostrar_todos() {
    return new Promise((resolve, reject) => {
        transaccionModels.Mostrar_todos()

       .then((res) => {
        resolve(res)
       })
       .catch((error) => { 
        reject(error)
       })

      })
  };

  registro(transaccion) {
    return new Promise((resolve, reject)=>{
        transaccionModels.registro(transaccion)
            .then((res)=>{
                resolve(res)
            })
            .catch((err)=>{
                reject(err)
            })
    })
}  
}

module.exports = new transaccionController ();