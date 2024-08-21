exports.seed = async function (knex) {
    
    await knex('CHAMADO').del();

    await knex('CHAMADO').insert([
        {
            NR_CHAMADO: "141845427",
            CD_HOSPITAL: "318",
            IE_TIPO_CHAMADO: "P",
            NM_PACIENTE: "PACIENTE 267",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "145363850",
            CD_HOSPITAL: "322",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 340",
            IE_SEXO: "M",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "143610890",
            CD_HOSPITAL: "309",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 115",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "141249360",
            CD_HOSPITAL: "309",
            IE_TIPO_CHAMADO: "P",
            NM_PACIENTE: "PACIENTE 173",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "145374588",
            CD_HOSPITAL: "322",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 349",
            IE_SEXO: "M",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "143904046",
            CD_HOSPITAL: "322",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 415",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "141209722",
            CD_HOSPITAL: "322",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 432",
            IE_SEXO: "M",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "145691083",
            CD_HOSPITAL: "310",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 203",
            IE_SEXO: "M",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "142619243",
            CD_HOSPITAL: "322",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 366",
            IE_SEXO: "M",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "143917078",
            CD_HOSPITAL: "309",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 120",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "142221569",
            CD_HOSPITAL: "322",
            IE_TIPO_CHAMADO: "P",
            NM_PACIENTE: "PACIENTE 306",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "145460361",
            CD_HOSPITAL: "318",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 252",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "145957971",
            CD_HOSPITAL: "322",
            IE_TIPO_CHAMADO: "P",
            NM_PACIENTE: "PACIENTE 429",
            IE_SEXO: "M",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "145348452",
            CD_HOSPITAL: "327",
            IE_TIPO_CHAMADO: "P",
            NM_PACIENTE: "PACIENTE 473",
            IE_SEXO: "M",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "147073714",
            CD_HOSPITAL: "244",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 29",
            IE_SEXO: "M",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "143446085",
            CD_HOSPITAL: "318",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 259",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "146971489",
            CD_HOSPITAL: "318",
            IE_TIPO_CHAMADO: "P",
            NM_PACIENTE: "PACIENTE 265",
            IE_SEXO: "M",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "143903762",
            CD_HOSPITAL: "322",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 278",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "142968162",
            CD_HOSPITAL: "244",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 3",
            IE_SEXO: "M",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "145348453",
            CD_HOSPITAL: "327",
            IE_TIPO_CHAMADO: "P",
            NM_PACIENTE: "PACIENTE 474",
            IE_SEXO: "M",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "147422698",
            CD_HOSPITAL: "322",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 275",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "142964056",
            CD_HOSPITAL: "334",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 501",
            IE_SEXO: "M",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "142778269",
            CD_HOSPITAL: "315",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 218",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "146730927",
            CD_HOSPITAL: "309",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 139",
            IE_SEXO: "M",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "146334797",
            CD_HOSPITAL: "309",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 121",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "143746040",
            CD_HOSPITAL: "295",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 97",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "143459013",
            CD_HOSPITAL: "309",
            IE_TIPO_CHAMADO: "P",
            NM_PACIENTE: "PACIENTE 122",
            IE_SEXO: "M",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "146684668",
            CD_HOSPITAL: "258",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 62",
            IE_SEXO: "M",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "142335847",
            CD_HOSPITAL: "244",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 1",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "143300365",
            CD_HOSPITAL: "295",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 92",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "142598763",
            CD_HOSPITAL: "327",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 497",
            IE_SEXO: "M",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "141201314",
            CD_HOSPITAL: "309",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 170",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "144127609",
            CD_HOSPITAL: "322",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 394",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "147074000",
            CD_HOSPITAL: "315",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 222",
            IE_SEXO: "M",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "143949068",
            CD_HOSPITAL: "244",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 28",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "142702141",
            CD_HOSPITAL: "309",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 178",
            IE_SEXO: "M",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "145915317",
            CD_HOSPITAL: "309",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 150",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "144220046",
            CD_HOSPITAL: "244",
            IE_TIPO_CHAMADO: "P",
            NM_PACIENTE: "PACIENTE 33",
            IE_SEXO: "M",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "142851839",
            CD_HOSPITAL: "310",
            IE_TIPO_CHAMADO: "P",
            NM_PACIENTE: "PACIENTE 212",
            IE_SEXO: "M",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "146807702",
            CD_HOSPITAL: "327",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 500",
            IE_SEXO: "M",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "146986360",
            CD_HOSPITAL: "258",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 66",
            IE_SEXO: "M",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "146707011",
            CD_HOSPITAL: "322",
            IE_TIPO_CHAMADO: "P",
            NM_PACIENTE: "PACIENTE 388",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "146139354",
            CD_HOSPITAL: "244",
            IE_TIPO_CHAMADO: "P",
            NM_PACIENTE: "PACIENTE 32",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "143744346",
            CD_HOSPITAL: "295",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 102",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "145752380",
            CD_HOSPITAL: "322",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 439",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "141163051",
            CD_HOSPITAL: "327",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 492",
            IE_SEXO: "M",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "142833750",
            CD_HOSPITAL: "322",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 318",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "141766494",
            CD_HOSPITAL: "315",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 224",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "147165686",
            CD_HOSPITAL: "295",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 98",
            IE_SEXO: "M",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "146945198",
            CD_HOSPITAL: "309",
            IE_TIPO_CHAMADO: "P",
            NM_PACIENTE: "PACIENTE 119",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "143576339",
            CD_HOSPITAL: "309",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 144",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "143928136",
            CD_HOSPITAL: "322",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 344",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "146684379",
            CD_HOSPITAL: "258",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 70",
            IE_SEXO: "M",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "143282744",
            CD_HOSPITAL: "309",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 200",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "142546253",
            CD_HOSPITAL: "322",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 286",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "146736667",
            CD_HOSPITAL: "322",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 319",
            IE_SEXO: "M",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "144486210",
            CD_HOSPITAL: "327",
            IE_TIPO_CHAMADO: "P",
            NM_PACIENTE: "PACIENTE 475",
            IE_SEXO: "M",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "142470305",
            CD_HOSPITAL: "295",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 86",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "146576878",
            CD_HOSPITAL: "327",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 470",
            IE_SEXO: "M",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "144988014",
            CD_HOSPITAL: "322",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 282",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "143560494",
            CD_HOSPITAL: "309",
            IE_TIPO_CHAMADO: "P",
            NM_PACIENTE: "PACIENTE 152",
            IE_SEXO: "M",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "146101956",
            CD_HOSPITAL: "327",
            IE_TIPO_CHAMADO: "P",
            NM_PACIENTE: "PACIENTE 495",
            IE_SEXO: "M",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "145250035",
            CD_HOSPITAL: "309",
            IE_TIPO_CHAMADO: "P",
            NM_PACIENTE: "PACIENTE 202",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "141257133",
            CD_HOSPITAL: "322",
            IE_TIPO_CHAMADO: "P",
            NM_PACIENTE: "PACIENTE 431",
            IE_SEXO: "M",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "142544618",
            CD_HOSPITAL: "309",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 124",
            IE_SEXO: "M",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "142389846",
            CD_HOSPITAL: "322",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 323",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "144460216",
            CD_HOSPITAL: "318",
            IE_TIPO_CHAMADO: "P",
            NM_PACIENTE: "PACIENTE 256",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "142944304",
            CD_HOSPITAL: "322",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 292",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "143288824",
            CD_HOSPITAL: "309",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 175",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "141746935",
            CD_HOSPITAL: "315",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 227",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "143202023",
            CD_HOSPITAL: "322",
            IE_TIPO_CHAMADO: "P",
            NM_PACIENTE: "PACIENTE 401",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "143569351",
            CD_HOSPITAL: "244",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 52",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "145852847",
            CD_HOSPITAL: "309",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 118",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "141193808",
            CD_HOSPITAL: "244",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 46",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "143439739",
            CD_HOSPITAL: "322",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 337",
            IE_SEXO: "M",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "142977717",
            CD_HOSPITAL: "322",
            IE_TIPO_CHAMADO: "P",
            NM_PACIENTE: "PACIENTE 365",
            IE_SEXO: "M",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "146753358",
            CD_HOSPITAL: "309",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 134",
            IE_SEXO: "M",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "146540490",
            CD_HOSPITAL: "322",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 295",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "144180647",
            CD_HOSPITAL: "315",
            IE_TIPO_CHAMADO: "P",
            NM_PACIENTE: "PACIENTE 226",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "143139993",
            CD_HOSPITAL: "322",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 291",
            IE_SEXO: "M",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "142836084",
            CD_HOSPITAL: "322",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 322",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "142265417",
            CD_HOSPITAL: "322",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 382",
            IE_SEXO: "M",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "142548346",
            CD_HOSPITAL: "322",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 301",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "143991233",
            CD_HOSPITAL: "309",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 153",
            IE_SEXO: "M",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "144179962",
            CD_HOSPITAL: "295",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 99",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "147222850",
            CD_HOSPITAL: "318",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 269",
            IE_SEXO: "M",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "144603347",
            CD_HOSPITAL: "318",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 258",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "146841177",
            CD_HOSPITAL: "322",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 271",
            IE_SEXO: "M",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "142391798",
            CD_HOSPITAL: "309",
            IE_TIPO_CHAMADO: "P",
            NM_PACIENTE: "PACIENTE 117",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "147366485",
            CD_HOSPITAL: "327",
            IE_TIPO_CHAMADO: "P",
            NM_PACIENTE: "PACIENTE 477",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "143744202",
            CD_HOSPITAL: "295",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 103",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "144950088",
            CD_HOSPITAL: "327",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 479",
            IE_SEXO: "M",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "145503142",
            CD_HOSPITAL: "318",
            IE_TIPO_CHAMADO: "P",
            NM_PACIENTE: "PACIENTE 233",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "145503144",
            CD_HOSPITAL: "318",
            IE_TIPO_CHAMADO: "P",
            NM_PACIENTE: "PACIENTE 235",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "141109862",
            CD_HOSPITAL: "309",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 162",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "141327454",
            CD_HOSPITAL: "322",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 369",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "145626559",
            CD_HOSPITAL: "244",
            IE_TIPO_CHAMADO: "P",
            NM_PACIENTE: "PACIENTE 7",
            IE_SEXO: "M",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "141289465",
            CD_HOSPITAL: "295",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 106",
            IE_SEXO: "M",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "145504830",
            CD_HOSPITAL: "318",
            IE_TIPO_CHAMADO: "P",
            NM_PACIENTE: "PACIENTE 242",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        },
        {
            NR_CHAMADO: "144274483",
            CD_HOSPITAL: "322",
            IE_TIPO_CHAMADO: "I",
            NM_PACIENTE: "PACIENTE 433",
            IE_SEXO: "F",
            IE_STATUS_CHAMADO: "A",
            CD_MEDICO: null
        }
    ])
}