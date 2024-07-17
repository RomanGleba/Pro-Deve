import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Navbar from './../Navbar/Navbar'
import Dialogs from '../Dialogs/Dialogs';

const Profile = () => {
    return (
    <div>
    <div>
 <div>
 <Navbar />

       <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHoCwNIsQabEhDUTO4KkpjIH-azEAz9REaVA&usqp=CAU'/>


    <div>
     
    </div>
    </div>
    <div>
       avatar + description
    </div>
   </div>
    <MyPosts />
    </div>
     
     

     


    );
}


export default Profile;
