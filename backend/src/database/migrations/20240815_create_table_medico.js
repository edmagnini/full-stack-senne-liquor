exports.up = function(knex) {
    return knex.schema.createTable('MEDICO', (table) => {
      table.increments('CD_MEDICO').primary(); 
      table.string('NM_MEDICO').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('MEDICO');
  };