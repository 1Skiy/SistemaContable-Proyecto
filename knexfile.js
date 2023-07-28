module.exports = {
    development: {
      client: 'mysql', 
      connection: {
        host: 'localhost', 
        user: 'root', 
        password: '', 
        database: 'sistema_contable' 
      },
      migrations: {
        directory: './migrations'
      }
    },
  
  };
  