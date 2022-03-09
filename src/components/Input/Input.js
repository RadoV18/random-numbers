import React from "react";
import "./Input.scss";

const Input = ({ id, type, name, value, onChange, label }) => {
    return (
        <div className="input__container">
            <label className="input__label" htmlFor={id}>{label}</label>
            <input
                className="input"
                id={id}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default Input;
