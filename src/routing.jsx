import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Dialogs from './Components/Dialogs/Dialogs';
import Profile from './Components/Profile/Profile';
import Music from './Components/Music/Music';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import ProtectedRoute from './ProtectedRoute';
import News from './Components/News/News';


export const routing = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'profile',
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: 'dialogs',
        element: (
          <ProtectedRoute>
            <Dialogs />
          </ProtectedRoute>
        ),
      },
      {
        path: 'music',
        element: (
          <ProtectedRoute>
            <Music />
          </ProtectedRoute>
        ),
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'news',
        element: <News />,
      }
     
    ],
  },
]);