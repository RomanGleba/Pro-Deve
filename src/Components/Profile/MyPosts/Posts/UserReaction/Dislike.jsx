import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dislikePost, removeDislike } from '../../../../Redux/Reducer/dislikeReducer';
import { removeLikeWhenDislike } from '../../../../Redux/Reducer/likeReducer';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import s from '../Post.module.css';

const DislikeButton = ({ id }) => {
    const dispatch = useDispatch();

    // Отримуємо масив постів, які мають дизлайки
    const dislikedPosts = useSelector((state) => state.dislikes.dislikedPosts);
    const likedPosts = useSelector((state) => state.likes.likedPosts);

    // Перевіряємо, чи пост має дизлайк або лайк
    const userDisliked = dislikedPosts.includes(id);
    const userLiked = likedPosts.includes(id);

    const handleDislike = () => {
        if (userLiked) {
            dispatch(removeLikeWhenDislike(id)); // Якщо пост лайкнутий, зняти лайк
        }

        if (userDisliked) {
            dispatch(removeDislike(id)); // Якщо дизлайк вже поставлений, зняти його
        } else {
            dispatch(dislikePost(id)); // Додати дизлайк
        }
    };

    return (
        <button
            onClick={handleDislike}
            className={s.reactionButton}
            style={{ color: userDisliked ? 'red' : 'inherit' }}
        >
            <ThumbDownAltIcon fontSize="small" />
            {dislikedPosts.filter(postId => postId === id).length} {/* Кількість дизлайків для конкретного поста */}
        </button>
    );
};

export default DislikeButton;
