const proveedorNuevoM = require('../models/proveedorM');

class proveedorNuevoController {
  Mostrar_todos() {
    return new Promise((resolve, reject) => {
      proveedorNuevoM.Mostrar_todos()

       .then((res) => {
        resolve(res)
       })
       .catch((error) => { 
        reject(error)
       })

      })
  };
  
  
  registro(proveedors) {
    return new Promise((resolve, reject)=>{
        proveedorNuevoM.registro(proveedors)
            .then((res)=>{
                resolve(res)
            })
            .catch((err)=>{
                reject(err)
            })
    })
  };

  editar(proveedors){
    return new Promise((resolve, reject)=>{
      proveedorNuevoM.editar(proveedors)
        .then((res)=>{
            resolve(res)
        })
        .catch((err)=>{
            reject(err)
        })
    })
  }

}

module.exports = new proveedorNuevoController();