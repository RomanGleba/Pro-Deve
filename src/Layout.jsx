import { Outlet, } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import './App.css';

const Layout = () => {
  
  return (
    <div className="app-wrapper">
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
