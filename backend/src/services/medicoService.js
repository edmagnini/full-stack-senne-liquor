const db = require('../config/dbConfig');
const ExceptionHandler = require('../utils/exceptionHandler');

class MedicoService {
    constructor() {
    }

    async getMedico(queryParams) {
        const {
            cd_medico,
            nm_medico,
        } = queryParams;

        const query = db("MEDICO")
            .select()

        if (cd_medico) query.where('CD_MEDICO', 'like', `%${cd_medico}%`);
        if (nm_medico) query.where(db.raw('LOWER("NM_MEDICO")'), 'like', `%${nm_medico.toLowerCase()}%`);


        const results = await query;
        if (!results.length)throw ExceptionHandler.notFound('Medico não encontrado');
        return results
    }
    async getMedicoById(id) {
        const medico = await db("MEDICO")
        .where('CD_MEDICO', id)
        .first()


    return medico ? medico : null
    }
}

module.exports = MedicoService