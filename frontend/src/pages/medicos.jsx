import TableComponent from "../components/tableComponent";
import { useTableData } from "../hooks/useTableData";

export default function Medicos() {
    const { data, columns, loading, error } = useTableData('/medico');

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
            <TableComponent
                columns={columns}
                data={data}
            />
        </>
    );
}