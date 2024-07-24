import React from 'react';
import {Navigate} from "react-router-dom";

const RouterAuth = (props) => {
    const token = localStorage.getItem("token");
    if(!token){
        return <Navigate to="/login" />;
    }else{
        return props.children
    }
};

export default RouterAuth;