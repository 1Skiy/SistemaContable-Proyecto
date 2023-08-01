exports.up = function(knex) {
    return knex.schema.createTable('libromayor', function(table) {
      table.increments('id').primary();
      table.string('nombrecuenta').notNullable();
      table.integer('saldo').notNullable();
      table.date('fecha').notNullable();
      table.string('tipo').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('libromayor');
  };