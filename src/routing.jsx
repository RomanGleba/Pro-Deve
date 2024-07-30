import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Dialogs from './Components/Dialogs/Dialogs';
import Profile from './Components/Profile/Profile';
import Music from './Components/Music/Music';
import Login from './Components/Weblogin/Login';
import Register from './Components/Weblogin/Register';
import ProtectedRoute from './Configuration/ProtectedRoute';
import News from './Components/News/News';
import Chat from './Components/Chat/Chat'; 

export const router = createBrowserRouter([
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
        path: 'dialogs/:id', 
        element: (
          <ProtectedRoute>
            <Chat />
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
        path: 'register',
        element: <Register />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'news',
        element: (
          <ProtectedRoute>
            <News />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
