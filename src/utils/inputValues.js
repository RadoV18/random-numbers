export const getInputValues = (algorithm) => {
    switch (algorithm) {
    case "cuadradosMedios":
        return [
            {
                type: "text",
                name: "seed",
                id: "seed",
            },
            {
                type: "text",
                name: "limit",
                id: "limit",
            },
        ];
    case "productosMedios":
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
    case "lineal":
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
    case "multiplicativo":
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
    }
};
