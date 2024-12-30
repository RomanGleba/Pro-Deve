import React from 'react';
import LikeButton from './UserReaction/Like';
import DislikeButton from './UserReaction/Dislike';
import s from './Post.module.css';

const Post = ({ id, message, imageUrl }) => (
    <div className={s.item}>
        <div className={s.content}>
            <img src={imageUrl} alt="Post" />
            <div className={s.message}>
            </div>
        </div>
        <div className={s.likesDislikes}>
            <LikeButton id={id} />
            <DislikeButton id={id} />
        </div>
    </div>
);

export default Post;






