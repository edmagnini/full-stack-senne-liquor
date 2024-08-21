class Medico {
    constructor(
        nm_medico,
        cd_medico = null
    ) {
        this.cd_medico = cd_medico,
        this.nm_medico = nm_medico
    }
}

module.exports = Medico