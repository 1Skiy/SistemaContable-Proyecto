const libromayorModels = require('../models/libromayorM');

class libromayorcontroller {
  Mostrar_todos() {
    return new Promise((resolve, reject) => {
      libromayorModels.Mostrar_todos()

       .then((res) => {
        resolve(res)
       })
       .catch((error) => { 
        reject(error)
       })

      })
  };

  
  
  registro(libromayor) {
    return new Promise((resolve, reject)=>{
        libromayorModels.registro(libromayor)
            .then((res)=>{
                resolve(res)
            })
            .catch((err)=>{
                reject(err)
            })
    })
}  
}

module.exports = new libromayorcontroller ();