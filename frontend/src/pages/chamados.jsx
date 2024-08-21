
import ChamadosMapFeature from "../components/chamadosMapFeature";
import TableComponent from "../components/tableComponent";
import { useTableData } from "../hooks/useTableData";


export default function Chamados() {
    const { data, columns, loading, error } = useTableData('/chamado');

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
            <TableComponent
                columns={columns}
                data={data}
            />
            <ChamadosMapFeature hospitals={data} />
        </>
    );
}
