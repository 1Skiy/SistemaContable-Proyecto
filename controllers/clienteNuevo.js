const clienteNuevoM = require('../models/clienteNuevoM');

class clienteNuevoController {
  Mostrar_todos() {
    return new Promise((resolve, reject) => {
      clienteNuevoM.Mostrar_todos()

       .then((res) => {
        resolve(res)
       })
       .catch((error) => { 
        reject(error)
       })

      })
  };

  Mostrar_por_cedula(clientes) {
    return new Promise((resolve, reject) => {
      clienteNuevoM.Mostrar_por_cedula(clientes)

       .then((res) => {
        resolve(res)
       })
       .catch((error) => { 
        reject(error)
       })

      })
  };
  
  
  registro(clientes) {
    return new Promise((resolve, reject)=>{
        clienteNuevoM.registro(clientes)
            .then((res)=>{
                resolve(res)
            })
            .catch((err)=>{
                reject(err)
            })
    })
}  
}

module.exports = new clienteNuevoController();