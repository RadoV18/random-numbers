import React, { useEffect } from "react";
import useForm from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { getInputList } from "../../redux/actions/inputList";
import { cuadradosMedios, productosMedios, lineal, multiplicativo } from "../../utils/algorithms";
import Input from "../Input/Input";
import { setEmptyTable, setTableContent } from "../../redux/actions/table";
import "./Form.scss";

const Form = ({ algorithm }) => {
    const dispatch = useDispatch();
    const inputList = useSelector((state) => state.inputList);
    const { values, handleChange } = useForm();

    useEffect(() => {
        dispatch(getInputList(algorithm));
    }, [algorithm]);

    const submit = (event) => {
        event.preventDefault();
        try {
            if (algorithm === "cuadradosMedios") {
                dispatch(setTableContent(cuadradosMedios(Number(values.seed), Number(values.limitCuadrados))));
            } else if (algorithm === "productosMedios") {
                dispatch(setTableContent(productosMedios(Number(values.seed0), Number(values.seed1), Number(values.limitProductos))));
            } else if (algorithm === "lineal") {
                const a = 1 + 4 * Number(values.k);
                const m = Math.pow(2, Number(values.g));
                dispatch(setTableContent(lineal(Number(values.seedLineal), Number(values.c), a, m)));
            } else if (algorithm === "multiplicativo") {
                const a = 3 + 8 * Number(values["multiplicativo-k"]);
                const m = Math.pow(2, Number(values["multiplicativo-g"]));
                dispatch(setTableContent(multiplicativo(Number(values.x0), a, m)));
            }
        } catch (error) {
            console.error(error);
        }
    };

    const clear = (event) => {
        event.preventDefault();
        dispatch(setEmptyTable());
        Object.keys(values).forEach(v => values[v] = "");
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
                        value={element.value}
                        onChange={handleChange}
                        label={element.label}
                    />
                ))
                : null}
            <div className="form__message">
                <span></span>
            </div>
            <div className="form__button-container">
                <button className="form__button" onClick={submit}>Generar</button>
                <button className="form__button" onClick={clear}>Limpiar</button>
            </div>
        </form>
    );
};

export default Form;
