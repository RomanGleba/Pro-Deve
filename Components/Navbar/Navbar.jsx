import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from "react-router-dom";




const Navbar = () => {

    return  (
     <nav className={s.nav}> 
    <div className={s.item}> 
       <NavLink to="/profile">Profil</NavLink>
    </div>
    <div className={`${s.item} ${s.active}`}>
    <a href="/dialogs">Messages</a>
    </div>
    <div className={s.item}>
       <a href="/News">News</a>
       </div>
       <div className={s.item}>
          <a href="/Music">Music</a>
          </div>
          <div className={s.item}>
            <a href="/Setting"> Setting</a>
          </div>
     
    
    </nav>
    )
}


export default Navbar;
