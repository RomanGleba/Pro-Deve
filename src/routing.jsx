import {createBrowserRouter} from 'react-router-dom';
import Layout from './Layout';
import Dialogs from './Components/Dialogs/Dialogs';
import Profile from './Components/Profile/Profile';
import Home from "./Components/Home/Home";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: 'profile',
                element: (

                    <Profile/>

                ),
            },
            {
                path: 'dialogs',
                element: (

                    <Dialogs/>

                ),
            },
            {
                path: 'home',
                element: (


                    <Home/>


                )
            }


        ],
    },
]);
