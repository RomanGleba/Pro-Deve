import React from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routing';


const App = (props) => {
  return (

        <RouterProvider router={router} />
  );
};

export default App;