exports.up = function(knex) {
    return knex.schema.createTable('HOSPITAL', (table) => {
      table.increments('CD_HOSPITAL').primary(); 
      table.string('NM_HOSPITAL').notNullable();
      table.decimal('NR_LATITUDE', 9, 6).notNullable();
      table.decimal('NR_LONGITUDE', 9, 6).notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('HOSPITAL');
  };