import React from 'react';
import s from'./MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = () => {
    return (
    <div>
    <div>
       My posts
    </div>
    <div>
      <textarea></textarea>
      <button>Add post</button>
      
    </div>
    <div className={s.posts}>
    <Post message="Hi  my name is Roma "likesCount='61'/>
    <Post message="It's my first post"likesCount='91' />
    <Post message="I like"likesCount='11'/>
        

         


       </div>
   
   
    </div>
    )
}


export default MyPosts;