import React from 'react';
import s from './Navbar.module.css';





const Navbar = () => {

    return   <nav className={s.nav}> 
    <div className={s.item}> 
       <a href="/profile">Profil</a>
    </div>
    <div className={`${s.item} ${s.active}`}>
    <a href="dialogs">Messages</a>
    </div>
    <div className={s.item}>
       <a>News</a>
       </div>
       <div className={s.item}>
          <a>Music</a>
          </div>
          <div className={s.item}>
             Setting
          </div>
     
    
    </nav>

}


export default Navbar;
