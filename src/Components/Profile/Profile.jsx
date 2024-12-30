import React from 'react';
import p from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Profileinfo from './Profileinfo/Profileinfo';
import AvatarLogo from "./Avatar/Avatarlogo";


const Profile = (props) => {
    return (
        <div>



        <AvatarLogo />

            <MyPosts posts={props.props} />
        </div>
    );
}

export default Profile;
