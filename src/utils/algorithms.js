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

export const productosMedios = (x0, x1, limit) => {
    if(!(x0 && x1 && limit)) {
        throw new Error("Missing arguments");
    }
    const result = [];

    const digits0 = String(x0).length;
    const digits1 = String(x1).length;

    if (digits0 !== digits1) {
        throw new Error("Las semillas deben tener la misma cantidad de dígitos");
    }

    for(let i = 1; i <= limit; i++) {
        let row = [];
        let yi = `${x0} · ${x1}`;
        row.push(i, yi);

        let stringValue = String(x0 * x1);
        if ((stringValue.length - digits0) % 2 === 1) {
            stringValue = "0" + stringValue;
        }
        row.push(stringValue);

        x0 = x1;

        let startIndex = (stringValue.length - digits0) / 2;
        x1 = Number(stringValue.substring(startIndex, startIndex + digits0));
        row.push(x1);

        let ri = x1 / Math.pow(10, digits0);
        row.push(ri);
        result.push(row);
    }

    return result;
};

export const lineal = (x0, c, a, m) => {
    if(!(x0 && c && a && m)) {
        throw new Error("Missing arguments");
    }

    let xi = x0;
    const result = [];

    for(let i = 1; i <= m; i++) {
        let row = [];

        let operacion = `(${a} · ${xi} + ${c}) mod (${m})`;
        row.push(i, operacion);

        xi = ((a * xi) + c) % m;
        let ri = xi / (m - 1);
        row.push(xi, ri);
        result.push(row);
    }

    return result;
};

export const multiplicativo = (x0, a, m) => {
    if(!(x0 && a && m)) {
        throw new Error("Missing arguments");
    }

    let xi = x0;
    const result = [];

    for(let i = 1; i < m; i++) {
        let row = [];

        let operacion = `(${a} · ${xi}) mod (${m})`;
        row.push(i, operacion);

        xi = (a * xi) % m;
        let ri = xi / (m - 1);
        row.push(xi, ri);
        result.push(row);
    }

    return result;
};
