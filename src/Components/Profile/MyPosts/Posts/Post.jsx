import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
   <div>

       <div className={s.item}>
         <img src={props.imageUrl} alt="Post"/>
       { props.message }
          <div>
          <span>like</span> {props.likesCount}
          </div>
          </div>



    </div>
    )
}


export default Post;
