import { Outlet } from 'react-router-dom'
import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import './App.css';
const Layout = () => {
    return (
        <div className="app-wrapper-">
       
        <Sidebar />
        <div className="content">
          <Outlet />
        </div>
      </div>
    )
}

export default Layout