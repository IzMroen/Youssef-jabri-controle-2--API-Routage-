// Actions.js

export const ADD_MODULE = 'ADD_MODULE';
export const DELETE_MODULE = 'DELETE_MODULE';
export const UPDATE_NOTE = 'UPDATE_NOTE';

export const addModule = (module) => {
    return {
        type: ADD_MODULE,
        payload: module,
    };
};

export const deleteModule = (moduleId) => {
    return {
        type: DELETE_MODULE,
        payload: moduleId,
    };
};

export const updateNote = (moduleId, newNote) => {
    return {
        type: UPDATE_NOTE,
        payload: { moduleId, newNote },
    };
};
