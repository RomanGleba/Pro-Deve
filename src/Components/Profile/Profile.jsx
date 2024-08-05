// src/components/Profile.js
import React, { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('currentUser')) || {};
  const { username = 'Guest', email = '', profilePicture = '' } = user;

  useEffect(() => {
    // Перевірка, чи користувач є в локальному сховищі, і перенаправлення на сторінку логіну, якщо ні
    if (!username) {
      navigate('/login');
    }
  }, [navigate, username]);

  const handleDeleteAccount = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = users.filter(u => u.username !== username);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    localStorage.removeItem('currentUser');

    const activeSessions = JSON.parse(localStorage.getItem('activeSessions')) || [];
    const updatedSessions = activeSessions.filter(u => u !== username);
    localStorage.setItem('activeSessions', JSON.stringify(updatedSessions));

    navigate('/register');
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');

    const activeSessions = JSON.parse(localStorage.getItem('activeSessions')) || [];
    const updatedSessions = activeSessions.filter(u => u !== username);
    localStorage.setItem('activeSessions', JSON.stringify(updatedSessions));

    navigate('/login');
  };

  return (
    <Box className={styles.container}>
      <Avatar
        alt="Profile Picture"
        src={profilePicture}
        className={styles.avatar}
      />
      <Typography variant="h6" className={styles.name}>{username}</Typography>
      <Typography variant="body2" className={styles.email}>{email}</Typography>
      <MyPosts />
      <Button variant="contained" color="secondary" onClick={handleDeleteAccount} className={styles.deleteButton}>
        Delete Account
      </Button>
      <Button variant="contained" onClick={handleLogout} className={styles.logoutButton}>
        Logout
      </Button>
    </Box>
  );
};

export default Profile;

