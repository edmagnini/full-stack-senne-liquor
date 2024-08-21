import * as React from "react";
import PropTypes from 'prop-types';
import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const formatColumnHeader = (header) => {
    return header
        .replace(/_/g, ' ') 
        .toLowerCase()    
        .replace(/(?:^|\s)\S/g, a => a.toUpperCase());
};

function TableComponent({ columns, data }) {
    const [sorting, setSorting] = React.useState([]);
    const [columnFilters, setColumnFilters] = React.useState([]);

    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
            columnFilters,
        },
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
    });

    return (
        <div>
            <div className="flex flex-wrap items-center py-4 gap-2">
                {table.getAllColumns().map(column => (
                    <div key={column.id} className="flex items-center">
                        <label htmlFor={column.id} className="mr-2">
                            {formatColumnHeader(column.columnDef.header)}
                        </label>
                        <Input
                            id={column.id}
                            placeholder={`${formatColumnHeader(column.columnDef.header)}...`}
                            value={columnFilters.find(filter => filter.id === column.id)?.value || ""}
                            onChange={(event) => {
                                const newFilterValue = event.target.value;
                                setColumnFilters(prevFilters => {
                                    const updatedFilters = prevFilters.filter(filter => filter.id !== column.id);
                                    if (newFilterValue) {
                                        updatedFilters.push({ id: column.id, value: newFilterValue });
                                    }
                                    return updatedFilters;
                                });
                                table.getColumn(column.id)?.setFilterValue(newFilterValue);
                            }}
                            className="max-w-sm"
                        />
                    </div>
                ))}
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                formatColumnHeader(header.column.columnDef.header),
                                                header.getContext()
                                            )}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    Anterior
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    Próxima
                </Button>
            </div>
        </div>
    );
}

TableComponent.propTypes = {
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            header: PropTypes.string.isRequired,
            accessorKey: PropTypes.string.isRequired,
        })
    ).isRequired,
    data: PropTypes.arrayOf(
        PropTypes.object
    ).isRequired,
};

export default TableComponent;
