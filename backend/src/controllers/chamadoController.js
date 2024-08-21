const ChamadoService = require("../services/chamadoService")
const HospitalService = require("../services/hospitalService")
const MedicoService = require("../services/medicoService")
const ExceptionHandler = require("../utils/exceptionHandler")
const Chamado = require("../models/chamado")
const { newChamadoSchema, updateChamadoSchema } = require("../utils/validator");


class ChamadoController {
    HospitalService
    MedicoService
    constructor() {
        this.chamadoService = new ChamadoService()
        this.hospitalService = new HospitalService()
        this.medicoService = new MedicoService()
    }

    async getChamado(req, res, next) {
        try {
            const chamados = await this.chamadoService.getChamado(req.query);
            res.status(200).json(chamados);
        } catch (error) {
            next(error);
        }
    }

    async createChamado(req, res, next) {
        try {
            await newChamadoSchema.validate(req.body)
            const { cd_hospital, ie_tipo_chamado, nm_paciente, ie_sexo, ie_status_chamado, cd_medico } = req.body

            const existingHospital = await this.hospitalService.getHospitalById(cd_hospital)
            if (!existingHospital) throw ExceptionHandler.notFound("Hospital não encontrado")

            const existingMedico = await this.medicoService.getMedicoById(cd_medico)
            if (!existingMedico) throw ExceptionHandler.notFound("Medico não encontrado")

            const newChamado = new Chamado(
                cd_hospital,
                ie_tipo_chamado,
                nm_paciente,
                ie_sexo,
                ie_status_chamado,
                cd_medico
            )

            await this.chamadoService.createChamado(newChamado)

            res.status(201).send("Chamado criado com sucesso");
        } catch (error) {
            next(error)
        }
    }

    async updateChamado(req, res, next) {
        try {
            await updateChamadoSchema.validate(req.body)

            const { nr_chamado, cd_medico } = req.body

            const existingMedico = await this.medicoService.getMedicoById(cd_medico)
            if (!existingMedico) throw ExceptionHandler.notFound("Medico não encontrado")
            
            const updateChamadoPayload = {
                nr_chamado,
                cd_medico
            }

            await this.chamadoService.updateChamado(updateChamadoPayload)

            res.status(200).send("Chamado atualizado com sucesso");
        } catch (error) {
            next(error)
        }
    }


}

module.exports = ChamadoController