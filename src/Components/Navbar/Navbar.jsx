import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, MenuItem, Button } from '@mui/material';
import s from './Navbar.module.css'; // Імпортуємо CSS модуль

const navItems = [
  { path: '/profile', label: 'Profile' },
  { path: '/news', label: 'News' },
  { path: '/music', label: 'Music' },
  { path: '/settings', label: 'Settings' }
];

const authItems = [
  { path: '/login', label: 'Login' },
  { path: '/register', label: 'Register' }
];

const dropdownItems = [
  { path: '/dialogs', label: 'Messages' },
  { path: '/friends', label: 'Friends' } // Додано Друзі у випадаючий список
];

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [dropdownAnchorEl, setDropdownAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDropdownMenuOpen = (event) => {
    setDropdownAnchorEl(event.currentTarget);
  };

  const handleDropdownMenuClose = () => {
    setDropdownAnchorEl(null);
  };

  const handleMenuItemClick = (path) => {
    navigate(path);
    handleMenuClose();
  };

  const handleDropdownMenuItemClick = (path) => {
    navigate(path);
    handleDropdownMenuClose();
  };

  return (
    <nav className={s.nav}>
      {navItems.map(({ path, label }, index) => (
        <NavLink
          key={index}
          to={path}
          className={({ isActive }) => (isActive ? `${s.item} ${s.active}` : s.item)}
          end
        >
          {label}
        </NavLink>
      ))}
      <div className={s.item}>
        <Button aria-controls="dropdown-menu" aria-haspopup="true" onClick={handleDropdownMenuOpen}>
          Messages and Friends
        </Button>
        <Menu
          id="dropdown-menu"
          anchorEl={dropdownAnchorEl}
          keepMounted
          open={Boolean(dropdownAnchorEl)}
          onClose={handleDropdownMenuClose}
        >
          {dropdownItems.map(({ path, label }, index) => (
            <MenuItem key={index} onClick={() => handleDropdownMenuItemClick(path)}>
              {label}
            </MenuItem>
          ))}
        </Menu>
      </div>
      <div className={s.item}>
        <Button aria-controls="auth-menu" aria-haspopup="true" onClick={handleMenuOpen}>
          Login and Register
        </Button>
        <Menu
          id="auth-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          {authItems.map(({ path, label }, index) => (
            <MenuItem key={index} onClick={() => handleMenuItemClick(path)}>
              {label}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;


