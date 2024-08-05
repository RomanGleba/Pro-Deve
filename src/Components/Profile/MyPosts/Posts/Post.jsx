import React from 'react';
import PropTypes from 'prop-types';
import s from './Post.module.css';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const Post = ({ id, message, likesCount, imageUrl, deletePost, likePost }) => {
  return (
    <div className={s.item}>
      <Zoom>
        <img src={imageUrl} alt="Post image" className={s.image} />
      </Zoom>
      <div className={s.content}>
        <p>{message}</p>
        <div className={s.actions}>
          <span 
            onClick={() => likePost(id)} 
            style={{ cursor: 'pointer' }} 
            role="button" 
            aria-label={`Like post ${id}`}
          >
            👍 {likesCount}
          </span>
          <button 
            onClick={() => deletePost(id)} 
            className={s.deleteButton} 
            aria-label={`Delete post ${id}`}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likesCount: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  deletePost: PropTypes.func.isRequired,
  likePost: PropTypes.func.isRequired,
};

export default Post;
