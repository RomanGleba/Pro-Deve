import React, { useState } from 'react';
import s from './Post.module.css';

const Post = (props) => {
    const [likes, setLikes] = useState(props.likesCount || 0);
    const [dislikes, setDislikes] = useState(0);
    const [userReaction, setUserReaction] = useState(null); // null - нема реакції, 'like' - лайк, 'dislike' - дизлайк

    const Like = () => {
        if (userReaction === 'dislike') {
            setLikes(likes + 1);
            setDislikes(dislikes - 1);
        } else if (userReaction !== 'like') {
            setLikes(likes + 1);
        }
        setUserReaction('like');
    };

    const Dislike = () => {
        if (userReaction === 'like') {
            setLikes(likes - 1);
            setDislikes(dislikes + 1);
        } else if (userReaction !== 'dislike') {
            setDislikes(dislikes + 1);
        }
        setUserReaction('dislike');
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
                <button onClick={Like} disabled={userReaction === 'like'}>Like</button> {likes}
                <button onClick={Dislike} disabled={userReaction === 'dislike'}>Dislike</button> {dislikes}
            </div>
        </div>
    );
};

export default Post;


