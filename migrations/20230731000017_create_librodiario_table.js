exports.up = function(knex) {
    return knex.schema.createTable('librodiario', function(table) {
      table.increments('id').primary();
      table.date('fecha').notNullable();
      table.string('descripcion').notNullable();
      table.integer('referencia').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('librodiario');
  };