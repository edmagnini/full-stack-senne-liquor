class Chamado {
    constructor(
        cd_hospital,
        ie_tipo_chamado,
        nm_paciente,
        ie_sexo,
        ie_status_chamado,
        cd_medico,
        nr_chamado = null
    ) {
        this.nr_chamado = nr_chamado,
        this.cd_hospital = cd_hospital,
        this.ie_tipo_chamado = ie_tipo_chamado,
        this.nm_paciente = nm_paciente,
        this.ie_sexo = ie_sexo,
        this.ie_status_chamado = ie_status_chamado,
        this.cd_medico = cd_medico
    }
}

module.exports = Chamado