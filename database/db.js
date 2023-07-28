const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USUARIO,
    password: process.env.DB_CLAVE,
    database: process.env.DB_DBNOMBRE,
});

conexion.connect((error)=>{
    if (error){
        console.error('El error de conexión es ' +error);
        return
    }
    
    console.log('Ingresaste a la base de datos');
})

module.exports = conexion;