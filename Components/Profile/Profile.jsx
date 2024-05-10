import React from 'react';
import s from'./Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return <div>  
    <div>
 <div>
       <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHoCwNIsQabEhDUTO4KkpjIH-azEAz9REaVA&usqp=CAU'/>

    </div>
    <div>
       avatar + description
    </div>
   </div>
    <MyPosts />
    </div>
}


export default Profile;