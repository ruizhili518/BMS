import React from 'react';
import './Main.css';
import Header from "../UI/Header/Header";
import {Layout, theme} from "antd";
import Navigator from "../UI/Navigator/Navigator";
import {useSelector} from "react-redux";
import {Outlet} from "react-router-dom";

const Main = () => {
    let collapsed = useSelector((state) => state.tab.isCollapsed);

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const Content = Layout.Content;
    return (
        <Layout>
            <Navigator collapsed={collapsed}/>
            <Layout style={{height: '100%'}}>
                <Header collapsed={collapsed}/>
                <Content
                    style={{
                        margin: '18rem 12rem',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG
                    }}>
                    <Outlet/>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Main;