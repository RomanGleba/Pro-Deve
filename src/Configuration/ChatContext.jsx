// src/ChatContext.js
import React, { createContext, useState, useContext } from 'react';

const ChatContext = createContext();

export const useChat = () => {
  return useContext(ChatContext);
};

export const ChatProvider = ({ children }) => {
  const [chats, setChats] = useState({});

  const sendMessage = (chatId, message, senderName) => {
    setChats((prevChats) => ({
      ...prevChats,
      [chatId]: [...(prevChats[chatId] || []), { id: prevChats[chatId] ? prevChats[chatId].length + 1 : 1, message, senderName }],
    }));

    setTimeout(() => {
      receiveMessage(chatId, `Reply to: ${message}`, senderName === 'Roma' ? 'Yurii' : 'Roma');
    }, 1000);
  };

  const receiveMessage = (chatId, message, senderName) => {
    setChats((prevChats) => ({
      ...prevChats,
      [chatId]: [...(prevChats[chatId] || []), { id: prevChats[chatId] ? prevChats[chatId].length + 1 : 1, message, senderName }],
    }));
  };

  const deleteMessage = (chatId, messageId) => {
    setChats((prevChats) => ({
      ...prevChats,
      [chatId]: prevChats[chatId].filter((m) => m.id !== messageId),
    }));
  };

  return (
    <ChatContext.Provider value={{ chats, sendMessage, deleteMessage }}>
      {children}
    </ChatContext.Provider>
  );
};
