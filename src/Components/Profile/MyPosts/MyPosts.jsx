import React, { useState, useEffect } from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = () => {
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem('posts');
    return savedPosts ? JSON.parse(savedPosts) : [];
  });
  const [newPost, setNewPost] = useState('');
  const [newImage, setNewImage] = useState(null);

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const addPost = () => {
    if (newPost.trim()) {
      const newPostData = {
        id: posts.length + 1,
        message: newPost,
        likesCount: 0,
        imageUrl: newImage || "data:image/png;base64,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", 
      };
      setPosts([...posts, newPostData]);
      setNewPost('');
      setNewImage(null); // Clear the image input
    }
  };

  const deletePost = (id) => {
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
  };

  const likePost = (id) => {
    const updatedPosts = posts.map(post => {
      if (post.id === id) {
        return { ...post, likesCount: post.likesCount + 1 };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const PostElements = posts.map(post => (
    <Post
      key={post.id}
      id={post.id}
      message={post.message}
      likesCount={post.likesCount}
      imageUrl={post.imageUrl}
      deletePost={deletePost}
      likePost={likePost}
    />
  ));

  return (
    <div>
      <div className={s.formContainer}>
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder=""
        ></textarea>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={s.posts}>
        {PostElements}
      </div>
    </div>
  );
};

export default MyPosts;

