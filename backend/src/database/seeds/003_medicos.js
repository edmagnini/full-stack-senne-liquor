exports.seed = async function (knex) {
    await knex('MEDICO').del();

    await knex('MEDICO').insert([
        {
            CD_MEDICO: 1,
            NM_MEDICO: "MEDICO 1"
        },
        {
            CD_MEDICO: 2,
            NM_MEDICO: "MEDICO 2"
        },
        {
            CD_MEDICO: 3,
            NM_MEDICO: "MEDICO 3"
        }
    ]);
};