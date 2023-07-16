const facturaNuevoM = require('../models/facturaNuevoM');

class facturaNuevoController {
  Mostrar_todos() {
    return new Promise((resolve, reject) => {
      facturaNuevoM.Mostrar_todos()

       .then((res) => {
        resolve(res)
       })
       .catch((error) => { 
        reject(error)
       })

      })
  };

  Mostrar_por_dia(facturas) {
    return new Promise((resolve, reject) => {
      facturaNuevoM.Mostrar_por_dia(facturas)

       .then((res) => {
        resolve(res)
       })
       .catch((error) => { 
        reject(error)
       })

      })
  };
  
  
  registro(facturas) {
    return new Promise((resolve, reject)=>{
        facturaNuevoM.registro(facturas)
            .then((res)=>{
                resolve(res)
            })
            .catch((err)=>{
                reject(err)
            })
    })
  }
  
  eliminar(facturas){
    return new Promise((resolve, reject)=>{
        facturaNuevoM.eliminar(facturas)
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

module.exports = new facturaNuevoController();