exports.up = function(knex) {
    return knex.schema.createTable('proveedor', function(table) {
      table.increments('id').primary();
      table.string('Nombre').notNullable();
      table.integer('Telefono').notNullable();
      table.integer('RIF').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('proveedor');
  };