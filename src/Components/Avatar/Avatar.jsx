import React from 'react';
import './Avatar.module.css';
import a from './Avatar.module.css'; 
const Avatar= () => {
    return (
        <div className={a.content}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHoCwNIsQabEhDUTO4KkpjIH-azEAz9REaVA&usqp=CAU' alt="Top" className={a.topImage} />
        <div className={a.bottomContent}>
            <div className={a.chat}>
                Chat
               
            </div>
        </div>
    </div>
    );
    
}


export default Avatar;
