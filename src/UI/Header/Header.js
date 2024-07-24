import React from 'react';
import {Button, Layout, Avatar, Dropdown} from "antd";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import './Header.css';
import {collapsedHandler} from "../../store/reducers/tab";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const Header = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const signOut = () => {
        //Delete token
        localStorage.removeItem("token");
        navigate("/login");
    }
    const toProfile = () => {
        navigate("/profile");
    }
    const items = [
        {
            key: '1',
            label: (<a target="_blank" rel="noopener noreferrer" onClick={toProfile}>
                Personal profile
            </a>)
        },
        {
            key: '2',
            danger: true,
            label: (<a target="_blank" rel="noopener noreferrer" onClick={signOut}>
                Sign out
            </a>)
        },
    ];
    const  Header = Layout.Header;
    const clickHandler = () => {
        dispatch(collapsedHandler());
    }
    return (
        <Header className='Header'>
            <Button
                type="text"
                icon={props.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={clickHandler}
                className='Header__button'
            />
            <Dropdown menu={{items}} className="Header__dropdown">
                <Avatar src={<img src={require('../../img/user.jpg')} alt='user'/>}/>
            </Dropdown>
        </Header>
    );
};

export default Header;