import React from "react";
import { getEmptyRow, getHeaders } from "../../utils/tableHeader";
import { useSelector } from "react-redux";
import "./Table.scss";

const Table = ({ algorithm }) => {
    const tableContent = useSelector((state) => state.table);

    return (
        <div className="table__wrapper">
            <div className="table__scroll">
                <table className="table">
                    <thead>
                        <tr className="table__header">
                            {getHeaders(algorithm).map((element, index) => (
                                <th key={index}>{element}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tableContent.map((element, rowIndex) => (
                            <tr key={"row-" + rowIndex} className="table__row">
                                {element.length !== 0
                                    ? element.map((element, index) => (
                                        <td
                                            key={
                                                "row-" +
                                                  rowIndex +
                                                  "-" +
                                                  index
                                            }
                                        >
                                            <span>{element}</span>
                                        </td>
                                    ))
                                    : getEmptyRow(algorithm).map(
                                        (element, index) => (
                                            <td
                                                key={
                                                    "row-" +
                                                      rowIndex +
                                                      "-" +
                                                      index
                                                }
                                            >
                                                {""}
                                            </td>
                                        )
                                    )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
