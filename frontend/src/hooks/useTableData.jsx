import { useState, useEffect } from "react";
import axios from "axios";
import { apiUrl } from "../constants/api-url";

export function useTableData(tableName, page = 1) {
    const [data, setData] = useState([]);
    const [columns, setColumns] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('senneToken');

            try {
                const response = await axios.get(`${apiUrl}${tableName}`, {
                    headers: {
                        'Authorization': `${token}`
                    }
                });

                const data = response.data;
                setData(data);

                if (data.length > 0) {
                    const firstItem = data[0];
                    const columns = Object.keys(firstItem).map(key => ({
                        header: key,
                        accessorKey: key,
                    }));
                    setColumns(columns);
                }
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [tableName, page]);

    return { data, columns, loading, error };
}
