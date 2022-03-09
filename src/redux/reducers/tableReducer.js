const initialState = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
];

const tableReducer = (state = initialState, action) => {
    switch (action.type) {
    case "SET_TABLE_CONTENT":
        return action.data;
    case "SET_EMPTY_TABLE":
        return initialState;
    default:
        return state;
    }
};

export default tableReducer;
