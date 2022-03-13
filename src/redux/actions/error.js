export const addError = (errorMessage) => {
    return {
        type: "ADD_ERROR",
        data: errorMessage
    };
};

export const clearErrors = () => {
    return {
        type: "CLEAR_ERRORS"
    };
};