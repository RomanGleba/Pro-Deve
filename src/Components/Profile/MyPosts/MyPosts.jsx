import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = ({}) => {


let Postchat = [
  {id: 1,message:'Hi  my name is Roma ',
    likesCount: '61',
    imageUrl: "data:image/png;base64,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",

   },
  {id: 2,message: 'Hi Roma im good',
    likesCount: '91',
    imageUrl: "data:image/jpeg;base64,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",

  },
  {id: 3,message:'I like',
    likesCount: '11',
    imageUrl: "data:image/png;base64,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",
  },
]

let PostchatElements = Postchat.map(post => (
  <Post 
    key={post.id}
    message={post.message} 
    likesCount={post.likesCount} 
    imageUrl={post.imageUrl} 
  />
));

return (
  <div>
    <div>
      <textarea></textarea>
      <button>Add post</button>
    </div>
    <div className={s.posts}>
      {PostchatElements}
    </div>
  </div>
);
}

export default MyPosts;
