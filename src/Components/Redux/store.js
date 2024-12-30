import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './Reducer/postsContent';
import likeReducer from "./Reducer/likeReducer";
import dislikeReducer from "./Reducer/dislikeReducer";

const store = configureStore({
    reducer: {
        posts: postsReducer,
        likes: likeReducer,
        dislikes: dislikeReducer,
    },
});

export default store;
