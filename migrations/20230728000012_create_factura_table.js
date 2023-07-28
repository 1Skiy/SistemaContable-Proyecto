exports.up = function(knex) {
    return knex.schema.createTable('factura', function(table) {
      table.increments('id').primary();
      table.string('Nombre').notNullable();
      table.date('Fecha').notNullable();
      table.integer('Monto').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('factura');
  };