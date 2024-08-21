const HashManager = require('../../utils/hashManager')
require("dotenv").config();

exports.seed = async function (knex) {

    await knex('USUARIO').del();
    const hashedPassword = await new HashManager().hash(process.env.USER_PASSWORD)

    await knex('USUARIO').insert([
        { CD_USUARIO: '1', NM_USUARIO: 'José', DS_EMAIL: process.env.USER_EMAIL, DS_SENHA: hashedPassword },
    ]);
};
