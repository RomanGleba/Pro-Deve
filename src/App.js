import React from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routing'; 
import { AuthProvider } from './Configuration/AuthContext';
import { ChatProvider } from './Configuration/ChatContext'; 

const App = () => {
  return (
    <AuthProvider>
      <ChatProvider>
        <RouterProvider router={router} />
      </ChatProvider>
    </AuthProvider>
  );
};

export default App;