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
import Navbar from './../Navbar/Navbar';

const theme = createTheme();

const profileStyles = {
  container: {
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
  },
  button: {
    marginTop: 2,
  },
  typographyHeading: {
    marginTop: 2,
  },
  typographySubheading: {
    marginTop: 1,
    color: 'textSecondary',
  },
  paper: {
    padding: 3,
    marginTop: 4,
    width: '100%',
  },
  gridContainer: {
    marginTop: 4,
  },
  paperPosts: {
    padding: 3,
  },
};

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
        <Navbar />
        <Box sx={profileStyles.container}>
          <Avatar
            alt="User Name"
            src={profileImage}
            sx={profileStyles.avatar}
          />
          {isAuthenticated && (
            <Button variant="contained" component="label" sx={profileStyles.button}>
              Upload Photo
              <input type="file" hidden onChange={handleImageUpload} />
            </Button>
          )}
          <Typography component="h1" variant="h5" sx={profileStyles.typographyHeading}>
            Roma
          </Typography>
          <Typography component="h2" variant="body1" sx={profileStyles.typographySubheading}>
            user@example.com
          </Typography>
          <Paper elevation={3} sx={profileStyles.paper}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              About Me
            </Typography>
            <Typography component="p" variant="body1">
              This is my first site
            </Typography>
          </Paper>
          <Grid container spacing={0} sx={profileStyles.gridContainer}>
            <Grid item xs={12}>
              <Paper elevation={3} sx={profileStyles.paperPosts}>
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

