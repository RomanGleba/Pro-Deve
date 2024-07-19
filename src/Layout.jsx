import { Outlet } from 'react-router-dom'
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import './App.css';
const Layout = () => {
    return (
        <div className="app-wrapper">
       
        <Navbar />
        <div className="content">
          <Outlet />
        </div>
      </div>
    )
}

export default Layout