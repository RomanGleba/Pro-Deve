import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Dialogs from './Components/Dialogs/Dialogs';
import Profile from './Components/Profile/Profile';



 

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'profile',
        element: (
          
            <Profile />
         
        ),
      },
      {
        path: 'dialogs',
        element: (
          
            <Dialogs />
         
        ),
      },
   
      
     
     
      
   
    
      
    ],
  },
]);
