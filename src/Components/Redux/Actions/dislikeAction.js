export const incrementDislike = (postId) => ({
    type: 'INCREMENT_DISLIKE',
    payload: postId
});

export const decrementDislike = (postId) => ({
    type: 'DECREMENT_DISLIKE',
    payload: postId
});
