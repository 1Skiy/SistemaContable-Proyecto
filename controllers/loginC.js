const loginModels = require("../models/loginM");

class loginControllers {
    login(credenciales) {
        return new Promise((resolve, reject) => {
          loginModels.login(credenciales)
            .then((token) => {
              if (token) {
                console.log("Inicio de sesión exitoso. Token generado:", token);
                resolve({ token: token }); // Enviar el token en un objeto JSON
              } else {
                resolve({ error: "Credenciales inválidas." });
              }
            })
            .catch((err) => {
              reject({ error: "Error en el servidor." });
            });
        });
      }
    registro(usuario) {
        return new Promise((resolve, reject)=>{
            loginModels.registro(usuario)
                .then((res)=>{
                    resolve(res)
                })
                .catch((err)=>{
                    reject(err)
                })
        })
    }
}

module.exports = new loginControllers()