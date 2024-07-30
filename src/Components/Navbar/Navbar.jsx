import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import s from './Navbar.module.css';
import { Menu, MenuItem, Button } from '@mui/material';

const navItems = [
  { path: '/profile', label: 'Profile' },
  { path: '/dialogs', label: 'Messages' },
  { path: '/news', label: 'News' },
  { path: '/music', label: 'Music' },
  { path: '/settings', label: 'Settings' }
];

const authItems = [
  { path: '/login', label: 'Login' },
  { path: '/register', label: 'Register' }
];

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
      {navItems.map((item, index) => (
        <div key={index} className={s.item}>
          <NavLink
            to={item.path}
            className={({ isActive }) => (isActive ? `${s.item} ${s.active}` : s.item)}
            end
          >
            {item.label}
          </NavLink>
        </div>
      ))}
      <div className={s.item}>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          Sign Up and Login
        </Button>
        <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
          {authItems.map((item, index) => (
            <MenuItem key={index} onClick={() => handleMenuItemClick(item.path)}>
              {item.label}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
