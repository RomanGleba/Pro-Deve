import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { likePost, unlikePost } from '../../../../Redux/Reducer/likeReducer';
import { removeDislikeWhenLike } from '../../../../Redux/Reducer/dislikeReducer';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import s from '../Post.module.css';

const LikeButton = ({ id }) => {
    const dispatch = useDispatch();

    // Отримуємо масив постів, які мають лайки
    const likedPosts = useSelector((state) => state.likes.likedPosts);
    const dislikedPosts = useSelector((state) => state.dislikes.dislikedPosts);

    // Перевіряємо, чи пост має лайк або дизлайк
    const userLiked = likedPosts.includes(id);
    const userDisliked = dislikedPosts.includes(id);

    const handleLike = () => {
        if (userDisliked) {
            dispatch(removeDislikeWhenLike(id)); // Якщо пост дизлайкнутий, зняти дизлайк
        }

        if (userLiked) {
            dispatch(unlikePost(id)); // Якщо лайк вже поставлений, зняти його
        } else {
            dispatch(likePost(id)); // Додати лайк
        }
    };

    return (
        <button
            onClick={handleLike}
            className={s.reactionButton}
            style={{ color: userLiked ? 'blue' : 'inherit' }}
        >
            <ThumbUpIcon fontSize="small" />
            {likedPosts.filter(postId => postId === id).length} {/* Кількість лайків для конкретного поста */}
        </button>
    );
};

export default LikeButton;

