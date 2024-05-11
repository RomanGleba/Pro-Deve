import {RouterProvider} from 'react-router-dom';
import React from 'react';
import './App.css';
import {routing} from "./routing";

const App = () => {
    return (
            <RouterProvider router={routing} />
    );
}

export default App;
