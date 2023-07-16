const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sistema_contable'
});

conexion.connect((error)=>{
    if (error){
        console.error('El error de conexión es ' +error);
        return
    }
    
    console.log('Ingresaste a la base de datos');
})

module.exports = conexion;