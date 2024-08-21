const db = require('../config/dbConfig');
const ExceptionHandler = require('../utils/exceptionHandler');

class HospitalService {
    constructor() {
    }

    async getHospital(queryParams) {
        const {
            cd_hospital,
            nm_hospital,
        } = queryParams;


        const query = db("HOSPITAL")
            .select()

        if (cd_hospital) query.where('CD_HOSPITAL', 'like', `%${cd_hospital}%`);
        if (nm_hospital) query.where(db.raw('LOWER("NM_HOSPITAL")'), 'like', `%${nm_hospital.toLowerCase()}%`);


        const results = await query;
        if (!results.length)throw ExceptionHandler.notFound('Hospital não encontrado');
        return results
    }
    async getHospitalById(id) {
        const hospital = await db("HOSPITAL")
        .where('CD_HOSPITAL', id)
        .first()


    return hospital ? hospital : null
    }
}

module.exports = HospitalService