import React, {useEffect, useState} from 'react';
import {Badge, Button, Card, Descriptions, Drawer, Space} from "antd";
import './item.css'
import {getItem} from "../../api/api";

const Item = () => {
    // Get item data from API.
    const [itemData, setItemData] = useState([]);
    useEffect(() => {
        getItem().then(res => {
            setItemData(res.data.data.map((item) =>
            {
                return {
                    key: item.id,
                    name: item.attributes.name,
                    img: item.attributes.img,
                    stockUnit: item.attributes.stockUnit,
                    lowStockAlert: item.attributes.lowStockAlert,
                    totalOrder: item.attributes.totalOrder,
                    returnRate: item.attributes.returnRate,
                    damageRate: item.attributes.damageRate
                }
            }))
        })},[])

    const itemsInfo = itemData.map((item) => [
        {
            key: '1',
            label: 'Product Name',
            children: item.name
        },
        {
            key: '2',
            label: 'Stock Unit',
            children: item.stockUnit
        },
        {
            key: '3',
            label: 'Low Stock Alert',
            children: item.lowStockAlert
        },
        {
            key: '4',
            label: 'Total Order',
            children: item.totalOrder
        },
        {
            key: '5',
            label: 'Damage Rate %',
            children: item.damageRate
        },
        {
            key: '6',
            label: 'Return Rate %',
            children: item.returnRate
        },
        {
            key: '7',
            label: 'Status',
            children: <Badge color={item.stockUnit >= item.lowStockAlert? "green":"red"}
                             text={item.stockUnit >= item.lowStockAlert? "Healthy":"Alert"}/>
        }
    ])
    const openState = itemData.map((item) => false)

    const [open, setOpen] = useState(openState);

    const showDrawer = (key) => {
        openState[key] = true;
        setOpen(openState);
    };
    const onClose = (key) => {
        openState[key] = false;
        setOpen(openState);
    };

    return (
        <Space className="item">
            <h2 className="item__header">Inventory Status</h2>
            <div className="item__container">
            {itemData.map((item) => {
                return (
                <Card className="item__card" hoverable>
                    <h3>{item.name}</h3>
                    <img src={item.img} alt={item.name} className="item__card__img"/>
                    <div className="item__card__info">
                        <div>
                            <p>Status</p> <Badge color={item.stockUnit >= item.lowStockAlert? "green":"red"}
                                                 text={item.stockUnit >= item.lowStockAlert? "Healthy":"Alert"} />
                        </div>
                        <Button type="primary" onClick={() => showDrawer(item.key - 1)}>
                            Detail
                        </Button>
                        <Drawer title="Inventory Detail" size={"large"} onClose={() => onClose(item.key - 1)} open={open[item.key - 1]}>
                            <Descriptions bordered items={itemsInfo[(item.key - 1)]}/>
                        </Drawer>
                    </div>
                </Card>
            )
            })}
            </div>
        </Space>

    );
};

export default Item;