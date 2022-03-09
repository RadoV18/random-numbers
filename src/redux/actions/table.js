export const setTableContent = (list) => {
    return {
        type: "SET_TABLE_CONTENT",
        data: list
    };
};

export const setEmptyTable = () => {
    return {
        type: "SET_EMPTY_TABLE"
    };
};