import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Container, Paper, List, ListItem, ListItemText, Typography, Avatar, Divider } from '@mui/material';

const DialogItem = ({ id, name }) => {
  let path = "/dialogs/" + id;

  return (
    <ListItem button component={NavLink} to={path}>
      <Avatar alt={name} src={`/static/images/avatar/${id}.jpg`} />
      <ListItemText primary={name} />
    </ListItem>
  );
};

const Message = ({ message }) => {
  return (
    <ListItem>
      <ListItemText primary={message} />
    </ListItem>
  );
};

const Dialogs = () => {
  let dialogChat = [
    { id: 1, name: 'Roma' },
    { id: 2, name: 'Yurii' },
  ];

  let messageChat = [
    { id: 1, message: 'Hi Yurii, how are you?' },
    { id: 2, message: 'Hi Roma, I am good' },
  ];

  return (
    <Container component="main" maxWidth="md" sx={{ mt: 8 }}>
      <Paper elevation={3}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ width: '30%', p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Dialogs
            </Typography>
            <List>
              {dialogChat.map(d => (
                <DialogItem key={d.id} name={d.name} id={d.id} />
              ))}
            </List>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box sx={{ width: '70%', p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Messages
            </Typography>
            <List>
              {messageChat.map(m => (
                <Message key={m.id} message={m.message} />
              ))}
            </List>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Dialogs;

