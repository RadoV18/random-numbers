const errorReducer = (state = [], action) => {
    switch (action.type) {
    case "ADD_ERROR":
        return [...state, action.data];
    case "CLEAR_ERRORS":
        return [];
    default:
        return state;
    }
};

export default errorReducer;