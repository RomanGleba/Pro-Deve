import React  from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import MyPosts from './Components/Profile/MyPosts/MyPosts';
import Dialogs from './Components/Dialogs/Dialogs';
import {BrowserRouter, Routes, Route,} from 'react-router-dom';









const App = (props) => {
 return (
 
 <div className='app-wrapper'>
   <Header />
   <Navbar />
  <div class='app-wrapper-content'>
   <BrowserRouter>
   <Routes>
      <Route index element={<Dialogs />} />
      <Route path="/Dialogs" element={<Dialogs />} />
    <Route path="/Profile" element={<Profile />} />
   </Routes>
   </BrowserRouter>
   
  </div>
</div>);      
   
      
}         


       

export default App;