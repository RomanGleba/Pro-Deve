import React from 'react';
import s from './Post.module.css';

const Post = ({ id, message, likesCount, imageUrl, deletePost, likePost }) => {
  return (
    <div className={s.item}>
      <img src={imageUrl} alt="Post" />
      <div className={s.content}>
        {message}
        <div className={s.actions}>
          <span onClick={() => likePost(id)} style={{ cursor: 'pointer' }}>like</span> {likesCount}
          <button onClick={() => deletePost(id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
