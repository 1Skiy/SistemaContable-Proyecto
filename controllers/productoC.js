const productoNuevoM = require('../models/productoM');

class productoNuevoController {
  Mostrar_todos() {
    return new Promise((resolve, reject) => {
      productoNuevoM.Mostrar_todos()

       .then((res) => {
        resolve(res)
       })
       .catch((error) => { 
        reject(error)
       })

      })
  };
  
  
  registro(producto) {
    return new Promise((resolve, reject)=>{
        productoNuevoM.registro(producto)
            .then((res)=>{
                resolve(res)
            })
            .catch((err)=>{
                reject(err)
            })
    })
}

editar(producto){
  return new Promise((resolve, reject)=>{
      productoNuevoM.editar(producto)
          .then((res)=>{
              resolve(res)
          })
          .catch((err)=>{
              reject(err)
          })
  })
}

eliminar(producto){
  return new Promise((resolve, reject)=>{
      productoNuevoM.eliminar(producto)
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

module.exports = new productoNuevoController();