const con = require("../database/db")
var jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const saltRounds = 10;

class usersModel {
    login(credenciales) {
        return new Promise((resolve, reject) => {
            con.query(
                "SELECT id, nombre, clave, rol FROM usuarios WHERE nombre=?",
                [credenciales.nombre],
                function (error, results, fields) {
                    if (error) {
                        reject(error);
                    } else {
                        if (results.length > 0 && bcrypt.compareSync(credenciales.clave, results[0].clave)) {
                            const { id, nombre, rol } = results[0];
                            const token = jwt.sign({ id, nombre, rol }, process.env.secret);
                            resolve(token);
                        } else {
                            resolve(null); // Usuario o contraseña incorrectos
                        }
                    }
                }
            );
        });
    }
    registro(usuario) {
        return new Promise((resolve, reject) => {
          con.query(
            "INSERT INTO usuarios (nombre, clave, rol) VALUES (?,?,?)",
            [usuario.nombre, bcrypt.hashSync(usuario.clave, saltRounds), usuario.rol],
            function (error, results, fields) {
              if (!error) {
                resolve(true);
              } else {
                reject(error);
              }
            }
          );
        });
      }
    }

module.exports = new usersModel()