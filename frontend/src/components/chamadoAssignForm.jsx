import { useState, useEffect } from "react";
import axios from "axios";
import { apiUrl } from "../constants/api-url";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

export default function ChamadoAssignForm() {
    const [chamados, setChamados] = useState([]);
    const [medicos, setMedicos] = useState([]);
    const [selectedMedicoByChamado, setSelectedMedicoByChamado] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const token = localStorage.getItem('senneToken');

    const fetchChamados = async () => {
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

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchChamados();
    }, [token]);

    const handleAssign = async (nrChamado) => {
        const selectedMedico = selectedMedicoByChamado[nrChamado];
        if (!selectedMedico) {
            setError("Please select a médico for this chamado.");
            return;
        }

        try {
            await axios.post(`${apiUrl}/chamado/update`, {
                nr_chamado: nrChamado,
                cd_medico: selectedMedico
            }, {
                headers: {
                    'Authorization': `${token}`
                }
            });
            setSelectedMedicoByChamado(prev => ({
                ...prev,
                [nrChamado]: ""
            }));
            fetchChamados();
        } catch (err) {
            toast({
                title: `Erro`,
                description: `Ocorreu um erro ao tentar realizar a solicitação`,
            });
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <div className="space-y-4">
                <div className="grid grid-cols-6 font-bold border-b py-2">
                    <div>Número Chamado</div>
                    <div>Tipo Chamado</div>
                    <div>Paciente</div>
                    <div>Sexo</div>
                    <div>Status Chamado</div>
                    <div>Ações</div>
                </div>
                {chamados.map(chamado => (
                    <div key={chamado.NR_CHAMADO} className="grid grid-cols-6 items-center space-x-4 border p-4 rounded-md">
                        <div>{chamado.NR_CHAMADO}</div>
                        <div>{chamado.IE_TIPO_CHAMADO}</div>
                        <div>{chamado.NM_PACIENTE}</div>
                        <div>{chamado.IE_SEXO}</div>
                        <div>{chamado.IE_STATUS_CHAMADO}</div>
                        <div className="flex items-center space-x-2">
                            <Select
                                onValueChange={value => setSelectedMedicoByChamado(prev => ({
                                    ...prev,
                                    [chamado.NR_CHAMADO]: value
                                }))}
                                value={selectedMedicoByChamado[chamado.NR_CHAMADO] || ""}
                            >
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Médico" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Médicos</SelectLabel>
                                        {medicos.map(medico => (
                                            <SelectItem key={medico.CD_MEDICO} value={medico.CD_MEDICO}>
                                                {medico.CD_MEDICO}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Button onClick={() => handleAssign(chamado.NR_CHAMADO)}>
                                Atribuir
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
