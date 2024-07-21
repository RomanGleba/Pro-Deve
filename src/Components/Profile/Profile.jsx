import React from 'react';
import p from './Profile.module.css'; 
import MyPosts from './MyPosts/MyPosts';
import Navbar from './../Navbar/Navbar'
import Dialogs from '../Dialogs/Dialogs';
import Avatar from '../Avatar/Avatar';
import Header from '../Header/Header';


const Profile = () => {
    return (
       <div>
        
        <Navbar />
        <Avatar />
        
            
                <MyPosts />
           
        
    </div>
    );
    
}


export default Profile;
