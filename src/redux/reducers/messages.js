const messageReducer = (state = [], action) => {
    switch (action.type) {
    case "ADD_MESSAGE":
        return [...state, action.data];
    case "CLEAR_MESSAGES":
        return [];
    case "UPDATE_MESSAGE":
        return state.map((message) => message === action.data.previous ? action.data.updated : message);
    case "DELETE_MESSAGE":
        return state.map((message) => message === action.data.message ? null : message);
    default:
        return state;
    }
};

export default messageReducer;