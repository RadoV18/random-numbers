export const cuadradosMedios = (xi, limit) => {
    if (!(xi && limit)) {
        throw new Error("Missing arguments");
    }
    const result = [];

    const digits = String(xi).length;

    for (let i = 1; i <= limit; i++) {
        let row = [];

        row.push(i, xi);

        let yi = Math.pow(xi, 2);

        let stringXi = String(yi);
        if ((stringXi.length - digits) % 2 === 1) {
            stringXi = "0" + stringXi;
        }
        row.push(stringXi);

        let startIndex = (stringXi.length - digits) / 2;
        xi = Number(stringXi.substring(startIndex, startIndex + digits));
        row.push(xi);

        let ri = xi / Math.pow(10, digits);
        row.push(ri);
        result.push(row);
    }
    return result;
};

export const productosMedios = () => {};

export const lineal = () => {};

export const multiplicativo = () => {};
