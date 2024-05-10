import React from 'react';
import './Navbar.module.css';
import classes from './Navbar.module.css';
const Navbar = () => {

    return   <nav className='nav'> 
    <div className='item'> 
       <a>Profil</a>
    </div>
    <div className='item'>
    <a>Messages</a>
    </div>
    <div className='item'>
       <a>News</a>
       </div>
       <div className='item'>
          <a>Music</a>
          </div>
          <div className='item'>
             Setting
          </div>
     
    
    </nav>

}


export default Navbar;
