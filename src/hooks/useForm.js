import { useState } from "react";

const useForm = () => {

    const [values, setValues] = useState({});

    const handleChange = event => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    return { values, handleChange };
};

export default useForm;