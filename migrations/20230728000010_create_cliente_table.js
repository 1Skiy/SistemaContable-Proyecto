exports.up = function(knex) {
    return knex.schema.createTable('cliente', function(table) {
      table.increments('id').primary();
      table.string('Nombre').notNullable();
      table.string('Apellido').notNullable();
      table.integer('Cedula').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('cliente');
  };
  