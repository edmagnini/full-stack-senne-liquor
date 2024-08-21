const HospitalService = require("../services/hospitalService")
const ExceptionHandler = require("../utils/exceptionHandler")
const Hospital = require("../models/hospital")


class HospitalController {
    constructor() {
        this.hospitalService = new HospitalService()
    }

    async getHospital(req, res, next) {
        try {
            const hospital = await this.hospitalService.getHospital(req.query);
            res.status(200).json(hospital);
        } catch (error) {
            next(error);
        }
    }
    
}

module.exports = HospitalController