import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <Box className={styles.container}>
      <Avatar
        alt="Profile Picture"
        src=""
        className={styles.avatar}
      />
      <Typography variant="h6">Roma</Typography>
      <Typography variant="body2">Software Developer</Typography>
      <MyPosts />
    </Box>
    
  );
};

export default Profile;
