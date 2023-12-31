exports.up = function(knex) {
    return knex.schema.createTable('usuarios', function(table) {
      table.increments('id').primary();
      table.string('nombre').notNullable();
      table.string('clave').notNullable();
      table.string('rol').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('usuarios');
  };