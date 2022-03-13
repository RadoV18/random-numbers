export const addMessage = (message) => {
    return {
        type: "ADD_MESSAGE",
        data: message
    };
};

export const updateMessage = (oldMessage, newMessage) => {
    return {
        type: "UPDATE_MESSAGE",
        data: {
            previous: oldMessage,
            updated: newMessage
        }
    };
};

export const deleteMessage = (message) => {
    return {
        type: "DELETE_MESSAGE",
        data: {
            message
        }
    };
};

export const clearMessages = () => {
    return {
        type: "CLEAR_MESSAGES"
    };
};