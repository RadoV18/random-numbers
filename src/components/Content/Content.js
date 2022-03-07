import React, { useState } from "react";
import { getHeaders } from "../../utils/tableHeader";

const Content = ({ title, algorithm }) => {
    const [tableHeader] = useState(getHeaders(algorithm));

    return (
        <div className="container">
            <div className="algorithm">
                <h1 className="algorithm__title">{title}</h1>
                <div className="algorithm__content">
                    <table>
                        <tbody>
                            <tr>
                                {tableHeader.map((element, index) => <th key={index}>{element}</th>)}
                            </tr>
                        </tbody>
                    </table>
                    <form></form>
                </div>
            </div>
        </div>
    );
};

export default Content;
