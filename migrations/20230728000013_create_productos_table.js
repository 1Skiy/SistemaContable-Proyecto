exports.up = function(knex) {
    return knex.schema.createTable('productos', function(table) {
      table.increments('id').primary();
      table.string('Nombre').notNullable();
      table.integer('Precio').notNullable();
      table.integer('Stock').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('productos');
  };