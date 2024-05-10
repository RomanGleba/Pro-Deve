import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import React  from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';








const App = (props) => {
 return (
  
 <div className='app-wrapper'>
   <Header />
   <Navbar />
  <div class='app-wrapper-content'>
  
  
   </div>
   <BrowserRouter>
    <Routes>
      <Route index element={<Dialogs />} />
      <Route path="/Dialogs" element={<Dialogs />} />
      <Route path="/Profile" element={<Profile />} />
    </Routes>
   </BrowserRouter>
      
      </div>
     
 );
}         

export default App;