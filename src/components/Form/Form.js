import React, { useEffect } from "react";
import useForm from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { getInputList } from "../../redux/actions/inputList";
import { cuadradosMedios } from "../../utils/algorithms";
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
                dispatch(setTableContent(cuadradosMedios(Number(values.seed), Number(values.limit))));
            }
        } catch (error) {
            console.error(error);
        }
    };

    const clear = (event) => {
        event.preventDefault();
        dispatch(setEmptyTable());
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
            <div className="form__button-container">
                <button className="form__button" onClick={submit}>Generar</button>
                <button className="form__button" onClick={clear}>Limpiar</button>
            </div>
        </form>
    );
};

export default Form;
