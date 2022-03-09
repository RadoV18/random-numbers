import React from "react";

export const getHeaders = (algorithm) => {
    switch (algorithm) {
    case "cuadradosMedios":
    case "productosMedios":
        return [
            <span key="header-0">i</span>,
            <span key="header-1">
                    y<sub>i</sub>
            </span>,
            <span key="header-2">Operación</span>,
            <span key="header-3">
                    x<sub>i</sub>
            </span>,
            <span key="header-4">
                    r<sub>i</sub>
            </span>,
        ];
    case "lineal":
    case "multiplicativo":
        return [
            <span key="header-0">i</span>,
            <span key="header-1">Operación</span>,
            <span key="header-2">x<sub>i</sub></span>,
            <span key="header-3">r<sub>i</sub></span>,
        ];
    }
};

export const getEmptyRow = (algorithm) => {
    return Array(getHeaders(algorithm).length).fill("");
};
