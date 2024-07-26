import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import s from './Navbar.module.css';
import { Menu, MenuItem, Button } from '@mui/material';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (path) => {
    navigate(path);
    handleClose();
  };

  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink 
          to="/profile" 
          className={({ isActive }) => isActive ? `${s.item} ${s.active}` : s.item} 
          end
        >
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink 
          to="/dialogs" 
          className={({ isActive }) => isActive ? `${s.item} ${s.active}` : s.item} 
          end
        >
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink 
          to="/news" 
          className={({ isActive }) => isActive ? `${s.item} ${s.active}` : s.item}
        >
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink 
          to="/music" 
          className={({ isActive }) => isActive ? `${s.item} ${s.active}` : s.item}
        >
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink 
          to="/settings" 
          className={({ isActive }) => isActive ? `${s.item} ${s.active}` : s.item}
        >
          Settings
        </NavLink>
      </div>
      <div className={s.item}>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          sing up and login
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => handleMenuItemClick('/login')}>Login</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('/register')}>Register</MenuItem>
        </Menu>
      </div>
    </nav>
  );
}

export default Navbar;
