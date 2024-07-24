import {createBrowserRouter, Navigate} from "react-router-dom";
import Main from "../conponents/Main";
import Home from "../conponents/home/home";
import Item from "../conponents/item/item";
import Store from "../conponents/store/store";
import Profile from "../conponents/profile/Profile";
import Login from "../conponents/login/Login";

const routes = [
    {
        path:'/',
        Component: Main,
        children:[
            {
              //Redirection: while 'xxx/', redirect to '.../home'
                path:'/',
                element:<Navigate to={'home'} replace/>
            },
            {
                path:'home',
                Component: Home
            },
            {
                path:'item',
                Component: Item
            },
            {
                path:'store',
                Component: Store
            },
            {
                path:'profile',
                Component: Profile
            }
        ]
    },{
        path:'/login',
        Component: Login,
    }
]

export default createBrowserRouter(routes);