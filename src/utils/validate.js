export const validateCuadradosMedios = (seed, limit) => {
    let result = [];

    if(seed === "" || limit === "") {
        return ["Debe llenar todos los campos."];
    }

    if(!Number(seed)) {
        result.push("La semilla debe ser un número.");
    } else {
        seed = Number(seed);
        if(!Number.isInteger(seed)) {
            result.push("La semilla debe ser un número entero.");
        } else {
            if(seed > 0) {
                if(String(seed).length < 2) {
                    result.push("La semilla debe tener al menos dos dígitos.");
                }
            } else {
                result.push("La semilla debe ser un número positivo.");
            }
        }
    }

    if(!Number(limit)) {
        result.push("El límite debe ser un número.");
    } else {
        limit = Number(limit);
        if(!Number.isInteger(limit)) {
            result.push("El límite debe ser un número entero.");
        } else {
            if(limit <= 0) {
                result.push("El límite debe ser mayor que cero.");
            }
        }
    }

    return result;
};

export const validateProductosMedios = (seed0, seed1, limit) => {
    let result = [];

    if(seed0 === "" || seed1 === "" || limit === "") {
        return ["Debe llenar todos los campos."];
    }

    if(!Number(seed0)) {
        result.push("La semilla X0 debe ser un número.");
    } else {
        seed0 = Number(seed0);
        if(!Number.isInteger(seed0)) {
            result.push("La semilla X0 debe ser un número entero.");
        } else {
            if(seed0 > 0) {
                if(String(seed0).length < 2) {
                    result.push("La semilla X0 debe tener al menos dos dígitos.");
                }
            } else {
                result.push("La semilla X0 debe ser un número positivo.");
            }
        }
    }

    if(!Number(seed1)) {
        result.push("La semilla X1 debe ser un número.");
    } else {
        seed1 = Number(seed1);
        if(!Number.isInteger(seed1)) {
            result.push("La semilla X1 debe ser un número entero.");
        } else {
            if(seed1 > 0) {
                if(String(seed1).length < 2) {
                    result.push("La semilla X1 debe tener al menos dos dígitos.");
                }
            } else {
                result.push("La semilla X1 debe ser un número positivo.");
            }
        }
    }

    if(!Number(limit)) {
        result.push("El límite debe ser un número.");
    } else {
        limit = Number(limit);
        if(!Number.isInteger(limit)) {
            result.push("El límite debe ser un número entero.");
        } else {
            if(limit <= 0) {
                result.push("El límite debe ser mayor que cero.");
            }
        }
    }

    return result;
};

export const validateLineal = (x0, k, g, c) => {
    let result = [];

    if(x0 === "" || k === "" || g === "" || c === "") {
        return ["Debe llenar todos los campos."];
    }

    if(!Number(x0)) {
        result.push("La semilla debe ser un número.");
    } else {
        x0 = Number(x0);
        if(!Number.isInteger(x0)) {
            result.push("La semilla debe ser un número entero.");
        } else {
            if(x0 <= 0) {
                result.push("La semilla debe ser mayor que cero.");
            }
        }
    }

    if(!Number(k)) {
        result.push("El valor k debe ser un número.");
    } else {
        k = Number(k);
        if(!Number.isInteger(k)) {
            result.push("El valor k debe ser un número entero.");
        } else {
            if(k <= 0) {
                result.push("El valor k debe ser mayor que cero.");
            }
        }
    }

    if(!Number(g)) {
        result.push("El valor g debe ser un número.");
    } else {
        g = Number(g);
        if(!Number.isInteger(g)) {
            result.push("El valor g debe ser un número entero.");
        } else {
            if(g <= 0) {
                result.push("El valor g debe ser mayor que cero.");
            }
        }
    }

    if(!Number(c)) {
        result.push("El valor c debe ser un número.");
    } else {
        c = Number(c);
        if(!Number.isInteger(c)) {
            result.push("El valor c debe ser un número entero.");
        } else {
            if(c <= 0) {
                result.push("El valor c debe ser mayor que cero.");
            }
        }
    }

    return result;
};

export const validateMultiplicativo = (x0, k, g) => {
    let result = [];

    if(x0 === "" || k === "" || g === "") {
        return ["Debe llenar todos los campos."];
    }

    if(!Number(x0)) {
        result.push("La semilla debe ser un número.");
    } else {
        x0 = Number(x0);
        if(!Number.isInteger(x0)) {
            result.push("La semilla debe ser un número entero.");
        } else {
            if(x0 <= 0) {
                result.push("La semilla debe ser mayor que cero.");
            } else if(x0 % 2 === 0) {
                result.push("La semilla debe ser impar.");
            }
        }
    }

    if(!Number(k)) {
        result.push("El valor k debe ser un número.");
    } else {
        k = Number(k);
        if(!Number.isInteger(k)) {
            result.push("El valor k debe ser un número entero.");
        } else {
            if(k <= 0) {
                result.push("El valor k debe ser mayor que cero.");
            }
        }
    }

    if(!Number(g)) {
        result.push("El valor g debe ser un número.");
    } else {
        g = Number(g);
        if(!Number.isInteger(g)) {
            result.push("El valor g debe ser un número entero.");
        } else {
            if(g <= 0) {
                result.push("El valor g debe ser mayor que cero.");
            }
        }
    }

    return result;
};