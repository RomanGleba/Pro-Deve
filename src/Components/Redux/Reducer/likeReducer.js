// likeReducer.js
import { createSlice } from '@reduxjs/toolkit';

const likeSlice = createSlice({
    name: 'likes',
    initialState: {
        likedPosts: [], // масив постів, які мають лайки
    },
    reducers: {
        likePost: (state, action) => {
            const postId = action.payload;
            if (!state.likedPosts.includes(postId)) {
                state.likedPosts.push(postId); // додаємо лайк на пост
            }
        },
        unlikePost: (state, action) => {
            const postId = action.payload;
            state.likedPosts = state.likedPosts.filter(id => id !== postId); // видаляємо лайк з поста
        },
        // Action для скасування лайку при натисканні дизлайка
        removeLikeWhenDislike: (state, action) => {
            const postId = action.payload;
            state.likedPosts = state.likedPosts.filter(id => id !== postId); // видаляємо лайк
        },
    },
});

export const { likePost, unlikePost, removeLikeWhenDislike } = likeSlice.actions;

export default likeSlice.reducer;


