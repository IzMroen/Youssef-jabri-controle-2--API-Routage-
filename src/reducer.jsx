// Reducer.js

import { ADD_MODULE, DELETE_MODULE, UPDATE_NOTE } from './Action.jsx';

const initialState = {
    modules: [
        { id: "1", title: "REACT", category: 'FRONTEND', note: 17 },
        { id: "2", title: "LARAVEL", category: 'BACKEND', note: 15 },
    ],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MODULE:
            return {
                ...state,
                modules: [...state.modules, action.payload],
            };

        case DELETE_MODULE:
            return {
                ...state,
                modules: state.modules.filter((module) => module.id !== action.payload),
            };

        case UPDATE_NOTE:
            return {
                ...state,
                modules: state.modules.map((module) =>
                    module.id === action.payload.moduleId
                        ? { ...module, note: action.payload.newNote }
                        : module
                ),
            };

        default:
            return state;
    }
};

export default reducer;
