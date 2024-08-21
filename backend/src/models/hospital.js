class Hospital {
    constructor(
        nm_hospital,
        nr_latitude,
        nr_longitude,
        cd_hospital = null
    ) {
        this.cd_hospital = cd_hospital,
        this.nm_hospital = nm_hospital,
        this.nr_latitude = nr_latitude,
        this.nr_longitude = nr_longitude
    }
}

module.exports = Hospital