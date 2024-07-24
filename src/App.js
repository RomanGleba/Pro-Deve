import React from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routing } from './routing';
import { AuthProvider } from './AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={routing} />
    </AuthProvider>
  );
};

export default App;

