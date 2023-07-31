const librodiarioModels = require('../models/librodiarioM');

class librodiariocontroller {
  Mostrar_todos() {
    return new Promise((resolve, reject) => {
        librodiarioModels.Mostrar_todos()

       .then((res) => {
        resolve(res)
       })
       .catch((error) => { 
        reject(error)
       })

      })
  };

  
  
  registro(librodiario) {
    return new Promise((resolve, reject)=>{
        librodiarioModels.registro(librodiario)
            .then((res)=>{
                resolve(res)
            })
            .catch((err)=>{
                reject(err)
            })
    })
}  
}

module.exports = new librodiariocontroller ();