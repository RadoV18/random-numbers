import React from "react";
import { getHeaders } from "../../utils/tableHeader";

const Table = ({ algorithm }) => {
    return (
        <table className="table">
            <tbody>
                <tr className="table__header">
                    {getHeaders(algorithm).map((element, index) => (
                        <th key={index}>{element}</th>
                    ))}
                </tr>
            </tbody>
        </table>
    );
};

export default Table;
