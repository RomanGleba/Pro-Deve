// dislikesReducer.js

const initialState = {
    posts: []
};

const dislikesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT_DISLIKE':
            return {
                ...state,
                posts: state.posts.map(post =>
                    post.id === action.payload
                        ? { ...post, dislikesCount: post.dislikesCount + 1 }
                        : post
                )
            };
        case 'DECREMENT_DISLIKE':
            return {
                ...state,
                posts: state.posts.map(post =>
                    post.id === action.payload
                        ? { ...post, dislikesCount: post.dislikesCount - 1 }
                        : post
                )
            };
        default:
            return state;
    }
};

export default dislikesReducer;
