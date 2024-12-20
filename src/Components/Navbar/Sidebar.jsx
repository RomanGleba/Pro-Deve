import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';





const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink 
          to="/Profile" 
          className={({ isActive }) => isActive ? `${s.item} ${s.active}` : s.item} 
          end
        >
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink 
          to="/Dialogs" 
          className={({ isActive }) => isActive ? `${s.item} ${s.active}` : s.item} 
          end
        >
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink 
          to="/News" 
          className={({ isActive }) => isActive ? `${s.item} ${s.active}` : s.item}
        >
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink 
          to="/Music" 
          className={({ isActive }) => isActive ? `${s.item} ${s.active}` : s.item}
        >
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink 
          to="/Settings" 
          className={({ isActive }) => isActive ? `${s.item} ${s.active}` : s.item}
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;

