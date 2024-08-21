import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { apiUrl } from "../constants/api-url";

const FormSchema = z.object({
    cd_hospital: z.number().int().positive({
        message: "Código do hospital é obrigatório",
    }),
    ie_tipo_chamado: z.enum(["I", "P"], {
        message: "Tipo de chamado deve ser 'I' ou 'P'",
    }),
    nm_paciente: z.string().nonempty({
        message: "Nome do paciente é obrigatório",
    }),
    ie_sexo: z.enum(["M", "F", "N"], {
        message: "Sexo deve ser 'M', 'F' ou 'N'",
    }),
    ie_status_chamado: z.enum(["A", "E", "C"], {
        message: "Status do chamado deve ser 'A', 'E' ou 'C'",
    }),
    cd_medico: z.number().int().positive({
        message: "Código do médico é obrigatório",
    }),
});

export default function CreateChamadoForm() {
    const [chamados, setChamados] = useState([]);
    const [medicos, setMedicos] = useState([]);
    const [hospitais, setHospitais] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            cd_hospital: "",
            ie_tipo_chamado: "",
            nm_paciente: "",
            ie_sexo: "",
            ie_status_chamado: "",
            cd_medico: "",
        },
    });
    const token = localStorage.getItem('senneToken');

    const { reset } = form;

    const fetchData = async () => {
        try {
            if (!token) {
                throw new Error("No token found");
            }

            const chamadosResponse = await axios.get(`${apiUrl}/chamado?CD_MEDICO=""`, {
                headers: {
                    'Authorization': `${token}`
                }
            });
            setChamados(chamadosResponse.data);

            const medicosResponse = await axios.get(`${apiUrl}/medico`, {
                headers: {
                    'Authorization': `${token}`
                }
            });
            setMedicos(medicosResponse.data);

            const hospitalResponse = await axios.get(`${apiUrl}/hospital`, {
                headers: {
                    'Authorization': `${token}`
                }
            });
            setHospitais(hospitalResponse.data);

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [token]);

    async function onSubmit(data) {
        let messageTitle = '';
        let messageDescription = '';

        try {
            const response = await axios.post(`${apiUrl}/chamado/create`, data, {
                headers: {
                    'Authorization': `${token}`
                }
            });
            if (response.status === 201) {
                messageTitle = 'Chamado criado com sucesso';
                messageDescription = 'O chamado foi criado com sucesso.';
                reset({
                    cd_hospital: "",
                    ie_tipo_chamado: "",
                    nm_paciente: "",
                    ie_sexo: "",
                    ie_status_chamado: "",
                    cd_medico: "",
                });
            }
        } catch (err) {
            messageTitle = 'Falha ao criar chamado';
            messageDescription = 'Não foi possível criar o chamado. Verifique os dados e tente novamente.';
        }

        toast({
            title: messageTitle,
            description: messageDescription,
        });
    }


    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-3/6 space-y-6 m-auto">
                <FormField
                    control={form.control}
                    name="cd_hospital"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Código do hospital</FormLabel>
                            <FormControl>
                                <Select
                                    key={field.value}
                                    value={field.value}
                                    defaultValue={field.value}
                                    onValueChange={field.onChange}
                                >
                                    <SelectTrigger className="w-[100%]">
                                        <SelectValue placeholder="Hospital" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Hospitais</SelectLabel>
                                            {hospitais.map((hospital) => (
                                                <SelectItem key={hospital.CD_HOSPITAL} value={hospital.CD_HOSPITAL}>
                                                    {hospital.NM_HOSPITAL}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="ie_tipo_chamado"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tipo de atendimento</FormLabel>
                            <FormControl>
                                <Select
                                    value={field.value || ""}
                                    onValueChange={(value) => field.onChange(value)}
                                    onBlur={field.onBlur}
                                >
                                    <SelectTrigger className="w-[100%]">
                                        <SelectValue placeholder="Tipo de chamado" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Tipo de Atendimento</SelectLabel>
                                            <SelectItem value="P">Pronto Socorro</SelectItem>
                                            <SelectItem value="I">Internado</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="nm_paciente"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nome do paciente</FormLabel>
                            <FormControl>
                                <Input
                                    type="text"
                                    placeholder="Roberto Loureiro"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="ie_sexo"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Sexo do paciente</FormLabel>
                            <FormControl>
                                <Select
                                    value={field.value || ""}
                                    onValueChange={(value) => field.onChange(value)}
                                    onBlur={field.onBlur}
                                >
                                    <SelectTrigger className="w-[100%]">
                                        <SelectValue placeholder="Sexo" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Sexo</SelectLabel>
                                            <SelectItem value="M">Masculino</SelectItem>
                                            <SelectItem value="F">Feminino</SelectItem>
                                            <SelectItem value="N">Não Informado</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="ie_status_chamado"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Status do chamado</FormLabel>
                            <FormControl>
                                <Select
                                    value={field.value || ""}
                                    onValueChange={(value) => field.onChange(value)}
                                    onBlur={field.onBlur}
                                >
                                    <SelectTrigger className="w-[100%]">
                                        <SelectValue placeholder="Status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Status do Chamado</SelectLabel>
                                            <SelectItem value="A">Aberto</SelectItem>
                                            <SelectItem value="E">Encerrado</SelectItem>
                                            <SelectItem value="C">Cancelado</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="cd_medico"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Código do médico</FormLabel>

                            <Select
                                key={field.value}
                                value={field.value}
                                defaultValue={field.value}
                                onValueChange={field.onChange}
                            >
                                <FormControl>
                                    <SelectTrigger className="w-[100%]">
                                        <SelectValue placeholder="Médico" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>


                                    {medicos.map((medico) => (
                                        <SelectItem key={medico.CD_MEDICO} value={medico.CD_MEDICO}>
                                            {medico.NM_MEDICO}
                                        </SelectItem>
                                    ))}

                                </SelectContent>
                            </Select>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className='ml-[50%]' type="submit">Enviar</Button>
            </form>
        </Form>
    );
}
