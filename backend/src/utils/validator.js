const yup = require('yup');

const emailSchema = yup.object({
    email: yup.string().email('E-mail inválido').required('E-mail é obrigatório')
});

const loginSchema = yup.object({
    email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
    senha: yup.string().min(6, 'Senha deve ter pelo menos 6 caracteres').required('Senha é obrigatória')
});
const registerSchema = yup.object({
    nome: yup.string().required('O nome é obrigatório'),
    email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
    senha: yup.string().min(6, 'Senha deve ter pelo menos 6 caracteres').required('Senha é obrigatória')
});
const newChamadoSchema = yup.object({
    cd_hospital: yup.number().required('O código do hospital é obrigatório'),
    ie_tipo_chamado: yup.string().oneOf(['I', 'P'], 'Tipo do chamado deve ser "I" ou "P"').required('Tipo do chamado é obrigatório'),
    nm_paciente: yup.string().required('Nome do paciente é obritagótio'),
    ie_sexo: yup.string().oneOf(['M', 'F', 'N'], 'Tipo do chamado deve ser "M", "F" ou "N"').required('Sexo biológico do paciente é obrigatório'),
    ie_status_chamado: yup.string().oneOf(['A', 'E', 'C'], 'Status do chamado deve ser "A", "E" ou "C"').required('Status do chamado é obrigatório'),
    cd_medico: yup.number().integer('O código do médico deve ser um número inteiro').required('O código do médico é obrigatório'),
});
const updateChamadoSchema = yup.object({
    nr_chamado: yup.number().required('O número do chamado é obrigatório'),
    cd_medico: yup.number().integer('O código do médico deve ser um número inteiro').required('O código do médico é obrigatório'),
});


module.exports = {
    emailSchema,
    loginSchema,
    registerSchema,
    newChamadoSchema,
    updateChamadoSchema
};