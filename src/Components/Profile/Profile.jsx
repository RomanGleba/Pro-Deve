import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css'; // Імпортуємо CSS модуль

const theme = createTheme();

const Profile = ({ isAuthenticated }) => {
  const [profileImage, setProfileImage] = useState('/static/images/avatar/1.jpg'); // Дефолтне зображення профілю

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="lg">
        <Box className={styles.container}>
          <Avatar
            alt="Profile Picture"
            src={profileImage}
            className={styles.avatar}
            sx={{ width: 100, height: 100 }}
          />
          {isAuthenticated && (
            <Button variant="contained" component="label" className={styles.button}>
              Upload Photo
              <input type="file" hidden onChange={handleImageUpload} />
            </Button>
          )}
          <Typography component="h1" variant="h5" className={styles.typographyHeading}>
            Roma
          </Typography>
          <Typography component="h2" variant="body1" className={styles.typographySubheading}>
            user@example.com
          </Typography>
          <Paper elevation={3} className={styles.paper}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              About Me
            </Typography>
            <Typography component="p" variant="body1">
              This is my first site
            </Typography>
          </Paper>
          <Grid container spacing={0} className={styles.gridContainer}>
            <Grid item xs={12}>
              <Paper elevation={3} className={styles.paperPosts}>
                <MyPosts />
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Profile;
