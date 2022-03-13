import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInputList } from "../../redux/actions/inputList";
import { addMessage, updateMessage, clearMessages } from "../../redux/actions/messages";
import { addError, clearErrors } from "../../redux/actions/error";
import { showModal } from "../../redux/actions/modal";
import { cuadradosMedios, productosMedios, lineal, multiplicativo } from "../../utils/algorithms";
import Input from "../Input/Input";
import { setEmptyTable, setTableContent } from "../../redux/actions/table";
import "./Form.scss";
import { degeneratingMessage } from "../../utils/messages";
import { validateCuadradosMedios, validateProductosMedios, validateLineal, validateMultiplicativo } from "../../utils/validate";

const Form = ({ algorithm }) => {
    const dispatch = useDispatch();
    const inputList = useSelector((state) => state.inputList);
    const messages = useSelector((state) => state.messages);
    const messageList = useSelector((state) => state.messages);
    const [values, setValues] = useState({});

    useLayoutEffect(() => {
        if(inputList instanceof Array) {
            setValues(Object.fromEntries(inputList.map((input) => [input.name, ""])));
        }
    }, [inputList]);

    useEffect(() => {
        dispatch(getInputList(algorithm));
    }, [algorithm]);

    const setMessage = (initialString, value) => {
        const found = messageList.find((message) => message.startsWith(initialString));
        if(Number(value)) {
            if(found) {
                dispatch(updateMessage(found, `${initialString}${value}`));
            } else {
                dispatch(addMessage(`${initialString}${value}`));
            }
        }
    };

    const handleChange = event => {
        const { name, value } = event.target;
        if(Number(value)) {
            if(name === "k") {
                setMessage("a = 1 + 4 · k = ", 1 + 4 * Number(value));
            } else if (name === "g") {
                setMessage("m = 2 ^ g = ", Math.pow(2, Number(value)));
                setMessage("Periodo de vida máximo = ", Math.pow(2, Number(value)));
            } else if (name === "multiplicativo-k") {
                setMessage("a = 3 + 8 · k = ", 3 + 8 * Number(value));
            } else if (name === "multiplicativo-g") {
                setMessage("m = 2 ^ g = ", Math.pow(2, Number(value)));
                const periodo = Math.pow(2, Number(value) - 2);
                setMessage("Periodo de vida máximo = ", periodo);
            }
        }
        setValues({
            ...values,
            [name]: value
        });
    };

    const submit = (event) => {
        event.preventDefault();
        dispatch(clearErrors());
        try {
            let result = [];
            if (algorithm === "cuadradosMedios") {
                const errors = validateCuadradosMedios(values.seed, values.limitCuadrados);
                if (errors.length > 0) {
                    errors.forEach(error => {
                        dispatch(addError(error));
                    });
                    dispatch(showModal());
                } else {
                    result = cuadradosMedios(Number(values.seed), Number(values.limitCuadrados));
                    dispatch(setTableContent(result));
                }
            } else if (algorithm === "productosMedios") {
                const errors = validateProductosMedios(values.seed0, values.seed1, values.limitProductos);
                if (errors.length > 0) {
                    errors.forEach(error => {
                        dispatch(addError(error));
                    });
                    dispatch(showModal());
                } else {
                    result = productosMedios(Number(values.seed0), Number(values.seed1), Number(values.limitProductos));
                    dispatch(setTableContent(result));
                }
            } else if (algorithm === "lineal") {
                const errors = validateLineal(values.seedLineal, values.k, values.g, values.c);
                if (errors.length > 0) {
                    errors.forEach(error => {
                        dispatch(addError(error));
                    });
                    dispatch(showModal());
                } else {
                    const a = 1 + 4 * Number(values.k);
                    const m = Math.pow(2, Number(values.g));
                    result = lineal(Number(values.seedLineal), Number(values.c), a, m);
                    dispatch(setTableContent(result));
                }
            } else if (algorithm === "multiplicativo") {
                const errors = validateMultiplicativo(values.x0, values["multiplicativo-k"], values["multiplicativo-g"]);
                if (errors.length > 0) {
                    errors.forEach(error => {
                        dispatch(addError(error));
                    });
                    dispatch(showModal());
                } else {
                    const a = 3 + 8 * Number(values["multiplicativo-k"]);
                    const m = Math.pow(2, Number(values["multiplicativo-g"]));
                    result = multiplicativo(Number(values.x0), a, m, Math.pow(2, Number(values["multiplicativo-g"] - 2)));
                    dispatch(setTableContent(result));
                }
            }
            const message = degeneratingMessage(result);
            const found = messageList instanceof Array ? messageList.find((message) => message.startsWith("La lista se degenera")) : undefined;
            if(message !== "") {
                if(found) {
                    dispatch(updateMessage(found, message));
                } else {
                    dispatch(addMessage(message));
                }
            } else {
                if(found) {
                    dispatch(updateMessage(found, null));
                }
            }
        } catch (error) {
            console.error(error);
        }
    };

    const clear = (event) => {
        event.preventDefault();
        dispatch(setEmptyTable());
        dispatch(clearMessages());
        Object.keys(values).forEach(key => values[key] = "");
        setValues(values);
    };

    return (
        <form className="form">
            {inputList instanceof Array
                ? inputList.map((element) => (
                    <Input
                        key={element.id}
                        id={element.id}
                        type={element.type}
                        name={element.name}
                        value={values[element.name]}
                        onChange={handleChange}
                        label={element.label}
                    />
                ))
                : null}
            <div className="form__message">
                {messages.map((message, index) => <span key={`message-${index}`}>{message}</span>)}
            </div>
            <div className="form__button-container">
                <button className="form__button" onClick={submit}>Generar</button>
                <button className="form__button" onClick={clear}>Limpiar</button>
            </div>
        </form>
    );
};

export default Form;
