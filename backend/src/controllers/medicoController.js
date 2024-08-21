const MedicoService = require("../services/medicoService")
const ExceptionHandler = require("../utils/exceptionHandler")
const Medico = require("../models/medico")


class MedicoController {
    constructor() {
        this.medicoService = new MedicoService()
    }

    async getMedico(req, res, next) {
        try {
            const medico = await this.medicoService.getMedico(req.query);
            res.status(200).json(medico);
        } catch (error) {
            next(error);
        }
    }

    
}

module.exports = MedicoController