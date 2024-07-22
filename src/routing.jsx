import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Dialogs from './Components/Dialogs/Dialogs';
import Profile from './Components/Profile/Profile';
import Navbar from "./Components/Navbar/Navbar";
import Music from "./Components/Music/Music";
export const routing = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                element: <Profile />,
                index: true
            },
            {
                path: "/Dialogs",
                element: <Dialogs />,
            },
            {
                path: "/Profile",
                element: <Profile />,
            },

            {
                path: "/Music",
                element: <Music />,
            },
            
          

            
        ]
    },
])
