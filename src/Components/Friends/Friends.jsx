import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import axios from 'axios';
import styles from './Friends.module.css';

const Friends = () => {
  const [users, setUsers] = useState([]);
  const [friends, setFriends] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);

  useEffect(() => {
    fetchUsers();
    fetchFriends();
    fetchPendingRequests();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const fetchFriends = async () => {
    try {
      const response = await axios.get('/api/friends');
      setFriends(response.data);
    } catch (error) {
      console.error('Error fetching friends:', error);
    }
  };

  const fetchPendingRequests = async () => {
    try {
      const response = await axios.get('/api/friend-requests');
      setPendingRequests(response.data);
    } catch (error) {
      console.error('Error fetching friend requests:', error);
    }
  };

  const sendFriendRequest = async (userId) => {
    try {
      await axios.post('/api/friend-request', { userId });
      fetchPendingRequests();
    } catch (error) {
      console.error('Error sending friend request:', error);
    }
  };

  const acceptFriendRequest = async (requestId) => {
    try {
      await axios.post(`/api/friend-request/${requestId}/accept`);
      fetchFriends();
      fetchPendingRequests();
    } catch (error) {
      console.error('Error accepting friend request:', error);
    }
  };

  const declineFriendRequest = async (requestId) => {
    try {
      await axios.post(`/api/friend-request/${requestId}/decline`);
      fetchPendingRequests();
    } catch (error) {
      console.error('Error declining friend request:', error);
    }
  };

  return (
    <Box className={styles.container}>
      <Box className={styles.friendsContainer}>
        <Typography variant="h6">Друзі</Typography>
        {friends.map(friend => (
          <Box key={friend.id} className={styles.friendItem}>
            <Avatar alt={friend.name} src={friend.profilePicture} />
            <Typography>{friend.name}</Typography>
          </Box>
        ))}
      </Box>

      <Box className={styles.usersContainer}>
        <Typography variant="h6">Користувачі</Typography>
        {users.map(user => (
          <Box key={user.id} className={styles.userItem}>
            <Avatar alt={user.name} src={user.profilePicture} />
            <Typography>{user.name}</Typography>
            <Button onClick={() => sendFriendRequest(user.id)}>Додати в друзі</Button>
          </Box>
        ))}
      </Box>

      <Box className={styles.pendingRequestsContainer}>
        <Typography variant="h6">Запити на дружбу</Typography>
        {pendingRequests.map(request => (
          <Box key={request.id} className={styles.requestItem}>
            <Typography>{request.name}</Typography>
            <Button onClick={() => acceptFriendRequest(request.id)}>Прийняти</Button>
            <Button onClick={() => declineFriendRequest(request.id)}>Відхилити</Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Friends;

