const inputListReducer = (state = {}, action) => {
    switch (action.type) {
    case "GET_cuadradosMedios":
        return [
            {
                label: "X0",
                type: "text",
                name: "seed",
                id: "seed",
            },
            {
                label: "Límite",
                type: "text",
                name: "limit",
                id: "limit",
            },
        ];
    case "GET_productosMedios":
        return [
            {
                type: "text",
                name: "seed0",
                id: "seed0",
            },
            {
                type: "text",
                name: "seed1",
                id: "seed1",
            },
            {
                type: "text",
                name: "limit",
                id: "limit",
            },
        ];
    case "GET_multiplicativo":
        return [
            {
                type: "text",
                name: "x0",
                id: "x0",
            },
            {
                type: "text",
                name: "k",
                id: "k",
            },
            {
                type: "text",
                name: "g",
                id: "g",
            },
        ];
    case "GET_lineal":
        return [
            {
                type: "text",
                name: "x0",
                id: "x0",
            },
            {
                type: "text",
                name: "k",
                id: "k",
            },
            {
                type: "text",
                name: "g",
                id: "g",
            },
            {
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
