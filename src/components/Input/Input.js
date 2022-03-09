import React from "react";

const Input = ({ id, type, name, value, onChange, label }) => {
    return (
        <div className="input__container">
            <label htmlFor={id}>{label}</label>
            <input
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
