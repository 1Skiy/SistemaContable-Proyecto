module.exports = {
    development: {
      client: 'mysql', 
      connection: {
        host: 'localhost', 
        user: 'root', 
        password: '', 
        database: 'sistema_contable' //escoger la base de datos a importar las tablas de migración
      },
      migrations: {
        directory: './migrations'
      }
    },
  
  };
  