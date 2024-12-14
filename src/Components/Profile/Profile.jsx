import React from 'react';
import p from './Profile.module.css'; 
import MyPosts from './MyPosts/MyPosts';
import Navbar from './../Navbar/Navbar'
import Profileinfo from './Profileinfo/Profileinfo';




const Profile = (props) => {





    return (
       <div className={p.profileContainer}>
        <Profileinfo />
           <MyPosts posts={props.props} />
           </div>
    );
    
}


export default Profile;
