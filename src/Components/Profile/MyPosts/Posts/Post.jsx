import React, { useState } from 'react';
import s from './Post.module.css';

const Post = (props) => {
    const [likes, setLikes] = useState(props.likesCount || 0);
    const [dislikes, setDislikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);

    const Like = () => {
        if (!isLiked && !isDisliked) {
            setLikes(likes + 1);
            setIsLiked(true);
        } else if (isDisliked) {
            setLikes(likes + 1);
            setDislikes(dislikes - 1);
            setIsLiked(true);
            setIsDisliked(false);
        }
    };

    const Dislike = () => {
        if (!isDisliked && !isLiked) {
            setDislikes(dislikes + 1);
            setIsDisliked(true);
        } else if (isLiked) {
            setLikes(likes - 1);
            setDislikes(dislikes + 1);
            setIsLiked(false);
            setIsDisliked(true);
        }
    };

    return (
        <div className={s.item}>
            <div className={s.content}>
                <img src={props.imageUrl} alt="Post" />
                <div className={s.message}>
                    <p>{props.message}</p>
                </div>
            </div>
            <div className={s.likesDislikes}>
                <button onClick={Like} disabled={isLiked}>Like</button> {likes}
                <button onClick={Dislike} disabled={isDisliked}>Dislike</button> {dislikes}
            </div>
        </div>
    );
};

export default Post;


