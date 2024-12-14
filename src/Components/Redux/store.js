import { createStore } from 'redux';


const initialState = {
    likes: 0,
    dislikes: 0,
};


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT_LIKE':
            return { ...state, likes: state.likes + 1 };
        case 'INCREMENT_DISLIKE':
            return { ...state, dislikes: state.dislikes + 1 };
        default:
            return state;
    }
};


const store = createStore(rootReducer);

export default store;
