class Usuario {
    constructor(
        nm_usuario,
        ds_email,
        ds_senha,
        cd_usuario = null
    ) {
        this.cd_usuario = cd_usuario,
        this.nm_usuario = nm_usuario,
        this.ds_email = ds_email,
        this.ds_senha = ds_senha
    }
}

module.exports = Usuario