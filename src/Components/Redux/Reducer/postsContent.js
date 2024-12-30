import { createSlice } from '@reduxjs/toolkit';

// Initial state: Array of posts (Empty at first)
const initialState = {
    posts: [], // Each post will have an id, message, and optional likesCount or other fields
};

// Create the slice for posts
const postsBox = createSlice({
    name: 'posts', // Slice name
    initialState,
    reducers: {
        // Action to add a new post
        addPost: (state, action) => {
            // Adds the new post to the posts array
            state.posts.push(action.payload);
        },
        // Action to delete a post by its ID
        deletePost: (state, action) => {
            // Filter out the post with the given ID
            state.posts = state.posts.filter(post => post.id !== action.payload);
        },
    },
});

// Export the actions to be used in components
export const { addPost, deletePost } = postsBox.actions;

// Export the reducer to be added in the store
export default postsBox.reducer;
