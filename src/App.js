import React  from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import MyPosts from './Components/Profile/MyPosts/MyPosts';
import Dialogs from './Components/Dialogs/Dialogs';





<Profile />

const App = (props) => {
 return (
 <div className='app-wrapper'>
   <Header />
   <Navbar />
  <div class='app-wrapper-content'>
  <Dialogs />
   </div>
   {/*<Profile />*/}
      
      </div>);
      
}         


       

export default App;