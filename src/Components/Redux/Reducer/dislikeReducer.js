// dislikeReducer.js
import { createSlice } from '@reduxjs/toolkit';

const dislikeSlice = createSlice({
    name: 'dislikes',
    initialState: {
        dislikedPosts: [], // масив постів, які мають дизлайки
    },
    reducers: {
        dislikePost: (state, action) => {
            const postId = action.payload;
            if (!state.dislikedPosts.includes(postId)) {
                state.dislikedPosts.push(postId); // додаємо дизлайк на пост
            }
        },
        removeDislike: (state, action) => {
            const postId = action.payload;
            state.dislikedPosts = state.dislikedPosts.filter(id => id !== postId); // видаляємо дизлайк з поста
        },
        // Action для скасування дизлайку при натисканні лайка
        removeDislikeWhenLike: (state, action) => {
            const postId = action.payload;
            state.dislikedPosts = state.dislikedPosts.filter(id => id !== postId); // видаляємо дизлайк
        },
    },
});

export const { dislikePost, removeDislike, removeDislikeWhenLike } = dislikeSlice.actions;

export default dislikeSlice.reducer;


