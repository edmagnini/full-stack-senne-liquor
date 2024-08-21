const db = require('../config/dbConfig')

class ChamadoService {
    constructor() {}

    async getChamado(queryParams) {
        const {
            nr_chamado,
            cd_hospital,
            ie_tipo_chamado,
            nm_paciente,
            ie_sexo,
            ie_status_chamado,
            cd_medico
        } = queryParams;

        const query = db("CHAMADO")
            .select(
                'CHAMADO.*',
                'HOSPITAL.NM_HOSPITAL AS HOSPITAL_NOME',
                'HOSPITAL.NR_LATITUDE AS HOSPITAL_LATITUDE',
                'HOSPITAL.NR_LONGITUDE AS HOSPITAL_LONGITUDE'
            )
            .leftJoin('HOSPITAL', 'CHAMADO.CD_HOSPITAL', 'HOSPITAL.CD_HOSPITAL')
            .leftJoin('MEDICO', 'CHAMADO.CD_MEDICO', 'MEDICO.CD_MEDICO');

        if (nr_chamado) query.where('CHAMADO.NR_CHAMADO', `${nr_chamado}`);
        if (cd_hospital) query.where('CHAMADO.CD_HOSPITAL', `${cd_hospital}`);
        if (ie_tipo_chamado) query.where(db.raw('LOWER("CHAMADO.IE_TIPO_CHAMADO")'), 'like', `%${ie_tipo_chamado.toLowerCase()}%`);
        if (nm_paciente) query.where(db.raw('LOWER("CHAMADO.NM_PACIENTE")'), 'like', `%${nm_paciente.toLowerCase()}%`);
        if (ie_sexo) query.where(db.raw('LOWER("CHAMADO.IE_SEXO")'), 'like', `%${ie_sexo.toLowerCase()}%`);
        if (ie_status_chamado) query.where(db.raw('LOWER("CHAMADO.IE_STATUS_CHAMADO")'), 'like', `%${ie_status_chamado.toLowerCase()}%`);

        if (cd_medico === "null") {
            query.whereNull('CHAMADO.CD_MEDICO');
        } else if (cd_medico) {
            query.where('CHAMADO.CD_MEDICO', parseInt(cd_medico, 10));
        }

        const results = await query;
        return results.length ? results : null;
    }

    async createChamado(createChamadoPayload) {
        const { cd_hospital, ie_tipo_chamado, nm_paciente, ie_sexo, ie_status_chamado, cd_medico } = createChamadoPayload;

        const chamado = await db("CHAMADO")
            .insert({ CD_HOSPITAL: cd_hospital, IE_TIPO_CHAMADO: ie_tipo_chamado, NM_PACIENTE: nm_paciente, IE_SEXO: ie_sexo, IE_STATUS_CHAMADO: ie_status_chamado, CD_MEDICO: cd_medico })
            .returning('*');

        return chamado ? chamado : null;
    }

    async updateChamado(updateChamadoPayload) {
        const { nr_chamado, cd_medico } = updateChamadoPayload;
        const chamado = await db("CHAMADO")
            .where('NR_CHAMADO', nr_chamado)
            .update({ 'CD_MEDICO': cd_medico });

        return chamado ? chamado : null;
    }
}

module.exports = ChamadoService;