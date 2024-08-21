exports.up = function(knex) {
    return knex.schema.createTable('CHAMADO', (table) => {
      table.increments('NR_CHAMADO').primary();
      table.integer('CD_HOSPITAL').notNullable();
      table.string('IE_TIPO_CHAMADO', 1);
      table.string('NM_PACIENTE');
      table.string('IE_SEXO', 1);
      table.string('IE_STATUS_CHAMADO', 1);
      table.integer('CD_MEDICO'); 
      table.foreign('CD_HOSPITAL').references('CD_HOSPITAL').inTable('HOSPITAL');
      table.foreign('CD_MEDICO').references('CD_MEDICO').inTable('MEDICO');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('CHAMADO');
  };