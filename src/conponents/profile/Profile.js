import React from 'react';
import {Avatar, Button, Calendar, Card, Flex, Progress, Space, Statistic, theme, Timeline} from "antd";
import "./Profile.css"
import {ArrowDownOutlined, ArrowUpOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

const Profile = () => {
    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };
    const { token } = theme.useToken();
    const wrapperStyle = {
        width: 500,
        border: `1px solid ${token.colorBorderSecondary}`,
        borderRadius: token.borderRadiusLG,
    };
    const navigate = useNavigate();
    const signOut = () => {
        //Delete token
        localStorage.removeItem("token");
        navigate("/login");
    }
    return (
        <Space className="profile">
            <Card className="profile__card1" hoverable>
                <div className="profile__card1__container">
                    <Avatar shape="square" size={128} src={require("../../img/user.jpg")}
                            className="profile__card1__container__img"/>
                    <div className="profile__card1__container__info">
                        <h2>Admin</h2>
                        <p>Super Admin</p>
                        <div className="profile__card1__container__info__data">
                            <Statistic
                                title="Revenue today"
                                value={4.26}
                                precision={2}
                                valueStyle={{color: 'green'}}
                                prefix={<ArrowUpOutlined/>}
                                suffix="%"/>
                            <Statistic
                                title="Collection today"
                                value={1.57}
                                precision={2}
                                valueStyle={{color: 'green'}}
                                prefix={<ArrowUpOutlined/>}
                                suffix="%"/>
                            <Statistic
                                title="Alert today"
                                value={3}
                                valueStyle={{color: 'Red'}}
                                prefix={<ArrowDownOutlined/>}/>
                        </div>
                    </div>
                    <div className="profile__card1__container__detail">
                        <Timeline
                            className="profile__card1__container__detail__timeline"
                            items={[
                                {
                                    color: 'green',
                                    children: 'iPhone15 Inventory Problem Solved 2024-07-16'
                                },
                                {
                                    color: 'green',
                                    children: 'iPad Pro Inventory Problem Solved 2024-07-17',
                                },
                                {
                                    color: 'red',
                                    children: (
                                        <>
                                            <p>3 Inventory Alert 2024-07-19</p>
                                        </>
                                    ),
                                }
                            ]}
                        />
                        <Button type={"primary"} danger={true} className="profile__card1__container__detail__button"
                        onClick={signOut}>Sign Out</Button>
                    </div>
                </div>
            </Card>
            <Card className="profile__card2">
                <div className="profile__card2__container">
                    <Flex gap="small" vertical className="profile__card2__container__progress">
                        <h2>Monthly target:</h2>
                        Revenue target: <Progress percent={63} status="active" />
                        Order target<Progress percent={61} status="active"/>
                        Collection target:<Progress percent={77} status="active"/>
                        Return rate target<Progress percent={70} status="success"/>
                    </Flex>
                    <div style={wrapperStyle}>
                        <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                    </div>
                </div>
            </Card>
        </Space>
    );
};

export default Profile;