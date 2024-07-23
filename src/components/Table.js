import React from "react";
import {useTable} from "react-table";

const Table = ({columns, data}) => {
    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} =
        useTable({
            columns,
            data,
        });
    return (
        <table {...getTableProps()} className="min-w-full bg-white border border-white">
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()} className="bg-white-100">
                        {headerGroup.headers.map((column) => (
                            <th className="border-b p-3 text-left text-sm font-bold text-gray-700" {...column.getHeaderProps()}>{column.render("Header")}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()} className="hover:bg-gray-50">
                            {row.cells.map((cell) => {
                                return <td className="border-b p-3 text-sm text-gray-700" {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Table;
