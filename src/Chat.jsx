import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { Box, TextField, Button, List, ListItem, ListItemText, Typography } from '@mui/material';

const socket = io('http://localhost:3001');

function Chat({ userId, userName }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    socket.on('chat message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off('chat message');
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      socket.emit('chat message', `${userName}: ${input}`);
      setInput('');
    }
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Chat with {userName}
      </Typography>
      <List>
        {messages.map((msg, index) => (
          <ListItem key={index}>
            <ListItemText primary={msg} />
          </ListItem>
        ))}
      </List>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Send
        </Button>
      </form>
    </Box>
  );
}

export default Chat;
