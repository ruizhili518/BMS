import React, {useEffect, useState} from 'react';
import {Row, Col, Card, Table, Statistic} from 'antd';
import './home.css';
import {getOrderTotalData , getRevenueTotal} from "../../api/api";
import {CloseCircleOutlined, DollarOutlined, HeartOutlined} from "@ant-design/icons";

const Home = () => {
    const userImg = require('../../img/user.jpg');
    // Get order total data from API while initialize the page.
    // 1. fetch
    // useEffect(() => {
    //     fetch('http://localhost:1337/api/order-totals')
    //         .then((res) =>{
    //             console.log(res.data);})
    //         .catch(() =>{})
    // }, []);
    // 2. axios
    const [orderData, setOrderData] = useState([]);
    useEffect(() => {
        getOrderTotalData().then(res => {
            setOrderData(res.data.data.map((item) =>
            {
                return {
                    key: item.id,
                    name: item.attributes.name,
                    today: item.attributes.today,
                    month: item.attributes.thismonth,
                    total: item.attributes.total}
            }))
        })},[])

    // Get revenue data from API while initialize the page.
    const [revenueData, setRevenueData] = useState([]);
    useEffect( () => {
        getRevenueTotal().then(res => {
            const arr = res.data.data[0].attributes;
            setRevenueData([
                {
                    id:1,
                    title: "Revenue today",
                    val : arr.revenue_today
            },
                {
                    id:2,
                    title: "Collection today",
                    val : arr.collection_today
                },
                {
                    id:3,
                    title: "Unpaid order today",
                    val : arr.unpaid_today
                },
                {
                    id:4,
                    title: "Revenue this month",
                    val : arr.revenue_month
                },
                {
                    id:5,
                    title: "Collection this month",
                    val : arr.collection_month
                },
                {
                    id:6,
                    title: "Unpaid order this month",
                    val : arr.unpaid_month
                },
            ])
        });
    },[])

    // Initialize the left bottom table columns.
    const columns = [
        {
            title: 'Item Name',
            dataIndex: 'name'
        },
        {
            title: 'Today',
            dataIndex: 'today',
        },
        {
            title: 'Month',
            dataIndex: 'month',
        },
        {
            title: 'Total',
            dataIndex: 'total',
        }
    ]

    return (
        <Row className="home">
            <Col span={8}> {/*Left side: User and Order table.*/}
                <Card hoverable style={{padding:0 , marginBottom: '20rem'}}> {/*Top left: User.*/}
                    <div className='home__user'>
                        <img src={userImg} alt="user" className='home__user__avatar'/>
                        <div className='home__user__info'>
                            <h3>Admin</h3>
                            <p>Super Administrator</p>
                        </div>
                    </div>
                    <div className='home__loginfo'>
                        <p><span className='home__loginfo__titles'>Last Logon Time:</span>
                            <span className='home__loginfo__args'>2024-07-19</span></p>
                        <p><span className='home__loginfo__titles'>Last Logon Location:</span>
                            <span className='home__loginfo__args'>Vancouver</span></p>
                    </div>
                </Card>
                <Card hoverable> {/*Bottom left: Order Table.*/}
                    <Table columns={columns} dataSource={orderData} size={'small'} pagination={{defaultPageSize: 4}}/>
                </Card>
            </Col>
            <Col span={16}> {/*Right side: Revenue cards.*/}
                <div className='home__revenueContainer'>
                    {revenueData.map((item) => {
                        return (
                            <Card bordered={false} className='home__revenueContainer__card' id={item.id} hoverable>
                                <Statistic
                                    title={item.title}
                                    value={item.val}
                                    prefix={'$'}
                                />
                                <div className={`home__revenueContainer__card__logoContainer--${item.id}`}>
                                    {item.title.includes('Revenue') ? <DollarOutlined className={`home__revenueContainer__card__logoContainer--${item.id}__logo`}/> : null}
                                    {item.title.includes('Collection') ? <HeartOutlined className={`home__revenueContainer__card__logoContainer--${item.id}__logo`}/> : null}
                                    {item.title.includes('Unpaid') ? <CloseCircleOutlined className={`home__revenueContainer__card__logoContainer--${item.id}__logo`}/> : null}
                                </div>
                            </Card>)
                    })}
                </div>
            </Col>
        </Row>
    );
};

export default Home;