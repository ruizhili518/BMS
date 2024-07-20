import React from 'react';
import {Layout, Menu} from "antd";
// Get config data.
import MenuConfig from '../../config/index'
import * as Icon from "@ant-design/icons";
import './Navigator.css'


const Navigator = (props) => {
// Manipulate menu config data.
    const iconToElement = (name) => React.createElement(Icon[name]);

    const menuItems = MenuConfig.map(item => {
        const child = {
            key: item.path,
            icon: iconToElement(item.icon),
            label: item.label
        }
        if(item.children){
            child.children = item.children.map(child => {
                return {
                    key: child.path,
                    icon: iconToElement(child.icon),
                    label: child.label
                }
            });
        }
        return child;
    })

    const Sider = Layout.Sider;
    return (
        <Sider trigger={null} collapsible collapsed={props.collapsed} className="navigator">
            <h3 className='navigator__header'>{props.collapsed ?
                (<img src={require('../../img/logo1.jpg')} alt={'Logo'} className='navigator__header__logo'/>) :
                `Backstage
                Management System` }
            </h3>
                <div className="demo-logo-vertical" />
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={menuItems}
            />
        </Sider>
    );
};

export default Navigator;