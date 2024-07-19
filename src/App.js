import {RouterProvider} from 'react-router-dom';
import React from 'react';
import './App.css';
import {routing} from "./routing";
import Dialogs from './Components/Dialogs/Dialogs';

const App = (props) => {
    return (
            <RouterProvider router={routing} />
    );
    
}

export default App;
