import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container, Paper, List, ListItem, ListItemText, Typography, TextField, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useChat } from '../../Configuration/ChatContext'; 
import './Chat.module.css'; 

const Chat = () => {
  const { id } = useParams();
  const [message, setMessage] = useState('');
  const { chats, sendMessage, deleteMessage } = useChat();

  const handleSendMessage = () => {
    if (message.trim()) {
      const senderName = id === '1' ? 'Roma' : 'Yurii';
      sendMessage(id, message, senderName);
      setMessage('');
    }
  };

  const handleDeleteMessage = (messageId) => {
    deleteMessage(id, messageId);
  };

  return (
    <Container component="main" maxWidth="md" sx={{ mt: 8 }}>
      <Paper elevation={3}>
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Chat with {id === '1' ? 'Yurii' : 'Roma'}
          </Typography>
          <List className="chat-list">
            {chats[id] && chats[id].map((m) => (
              <ListItem key={m.id} className={m.senderName === (id === '1' ? 'Roma' : 'Yurii') ? 'chat-message self' : 'chat-message'}>
                <ListItemText primary={m.message} secondary={m.senderName} />
                <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteMessage(m.id)}>
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
          <Box sx={{ display: 'flex', mt: 2 }}>
            <TextField
              fullWidth
              variant="outlined"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message"
            />
            <Button variant="contained" color="primary" onClick={handleSendMessage}>
              Send
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Chat;
