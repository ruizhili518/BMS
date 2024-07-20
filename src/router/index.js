import {createBrowserRouter, Navigate} from "react-router-dom";
import Main from "../conponents/Main";
import Home from "../conponents/home/home";
import Item from "../conponents/item/item";
import User from "../conponents/user/user";
import PageOne from "../conponents/other/PageOne";
import PageTwo from "../conponents/other/PageTwo";

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
                path:'user',
                Component: User
            },
            {
                path:'other',
                children:[
                    {
                        path:'pageone',
                        Component: PageOne
                    },
                    {
                        path:'pagetwo',
                        Component: PageTwo
                    }
                ]
            }


        ]
    }
]

export default createBrowserRouter(routes);