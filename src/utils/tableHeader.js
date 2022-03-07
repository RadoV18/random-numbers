export const getHeaders = (algorithm) => {
    switch (algorithm) {
    case "cuadradosMedios":
    case "productosMedios":
        return ["i", "yi", "Operación", "xi", "ri"];
    case "lineal":
    case "multiplicativo":
        return ["i", "Operación", "xi", "ri"];
    }
};

export const getEmptyRow = (algorithm) => {
    return Array(getHeaders(algorithm).length).fill("");
};
