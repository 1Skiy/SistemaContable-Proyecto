exports.up = function(knex) {
    return knex.schema.createTable('transaccion', function(table) {
      table.increments('id').primary();
      table.string('tipo').notNullable();
      table.integer('monto').notNullable();
      table.date('fecha').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('transaccion');
  };