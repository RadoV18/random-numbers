import React from "react";

const inputListReducer = (state = {}, action) => {
    switch (action.type) {
    case "GET_cuadradosMedios":
        return [
            {
                label: <span>Semilla X<sub>0</sub></span>,
                type: "text",
                name: "seed",
                id: "seed",
            },
            {
                label: <span>Cantidad de Números</span>,
                type: "text",
                name: "limitCuadrados",
                id: "limitCuadrados",
            },
        ];
    case "GET_productosMedios":
        return [
            {
                label: <span>Semilla X<sub>0</sub></span>,
                type: "text",
                name: "seed0",
                id: "seed0",
            },
            {
                label: <span>Semilla X<sub>1</sub></span>,
                type: "text",
                name: "seed1",
                id: "seed1",
            },
            {
                label: <span>Cantidad de Números</span>,
                type: "text",
                name: "limitProductos",
                id: "limitProductos",
            },
        ];
    case "GET_multiplicativo":
        return [
            {
                label: <span>Semilla X<sub>0</sub></span>,
                type: "text",
                name: "x0",
                id: "x0",
            },
            {
                label: <span>k</span>,
                type: "text",
                name: "multiplicativo-k",
                id: "multiplicativo-k",
            },
            {
                label: <span>g</span>,
                type: "text",
                name: "multiplicativo-g",
                id: "multiplicativo-g",
            },
        ];
    case "GET_lineal":
        return [
            {
                label: <span>Semilla X<sub>0</sub></span>,
                type: "text",
                name: "seedLineal",
                id: "seedLineal",
            },
            {
                label: <span>k (entero)</span>,
                type: "text",
                name: "k",
                id: "k",
            },
            {
                label: <span>g (entero)</span>,
                type: "text",
                name: "g",
                id: "g",
            },
            {
                label: <span>c (primo cercano a m)</span>,
                type: "text",
                name: "c",
                id: "c",
            },
        ];
    default:
        return state;
    }
};

export default inputListReducer;
