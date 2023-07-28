exports.up = function(knex) {
    return knex.schema.createTable('cuenta', function(table) {
      table.increments('id').primary();
      table.string('Nombre').notNullable();
      table.string('Tipo').notNullable();
      table.string('Estado').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('cuenta');
  };