import React, {useEffect, useState} from 'react';
import './store.css'
import {Button, Form, Input, message, Modal, Popconfirm, Space, Table} from "antd";
import {addStore, deleteStoreById, getStore} from "../../api/api";

const Store = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = async () => {
        const inputData = myForm.getFieldsValue();
        try {
            await addStore(inputData)
            const newData = await getData().then();
            setOriStoreData(newData);
            setStoreData(newData);
            setIsModalOpen(false);
        }catch(err) {
            message.error('Please check your input!');
        }
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const editHandler = () => {

    }

    const searchHandler = (e) => {
        if(e.name){
            setStoreData(storeData.filter(item => item.name.includes(e.name)))
        }else{
            setStoreData(oriStoreData)
        }
    }
    // Get the store data from API.

    const [storeData, setStoreData] = useState([]);
    const [oriStoreData, setOriStoreData] = useState([]);

    const getData = async () => {
        const ori = await getStore()
        return ori.data.data.map((item) => {
            return {
                key: item.id,
                name: item.attributes.name,
                address: item.attributes.address,
                number: item.attributes.number,
                open: item.attributes.open,
                close: item.attributes.close
            }
        });
    }

    useEffect(() => {
        getData().then(res => {
            setOriStoreData(res);
            setStoreData(res);
        })
    },[])

    // Pop confirm handler, confirm to delete store info by ID.
    const confirmDelete = async (data) => {
        message.success('Store data deleted successfully.');
        await deleteStoreById(data.key);
        const newData = await getData().then();
        setOriStoreData(newData);
        setStoreData(newData);
    };

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Open at',
            key: 'open',
            dataIndex: 'open',
            render: (_,record) => (
                `${record.open} a.m.`
            )
        },
        {
            title: 'Close at',
            key: 'close',
            dataIndex: 'close',
            render: (_,record) => (
                `${record.close} p.m.`
            )
        },
        {
            title: 'Phone number',
            key: 'number',
            dataIndex: 'number',
        },
        {
            title: 'Action',
            key: 'action',
            render: (data) => (
                <Space size="middle">
                    <Button type={"primary"} style={{width: '90rem'}} onClick={editHandler}>Edit</Button>
                    <Popconfirm
                        title="Delete the task"
                        description="Are you sure to delete this task?"
                        onConfirm={() => confirmDelete(data)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button danger type={"primary"} style={{width: '90rem'}}>Delete</Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    let [myForm] = Form.useForm();

    return (
        <div className="user">
            <div className="user__topBar">
                <Button type="primary" onClick={showModal}>+ Add</Button>
                <Modal title="Add new store information." open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <Form form={myForm} name="new" labelCol={{span: 6,}} wrapperCol={{span: 14,}}
                        style={{maxWidth: 600,}} initialValues={{remember: false}}
                        autoComplete="off" onFinish={handleOk}>
                        <Form.Item label="Name" name="name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Store name is required!',
                                },
                            ]}
                        ><Input />
                        </Form.Item>
                        <Form.Item
                            label="Address"
                            name="address"
                            rules={[
                                {
                                    required: true,
                                    message: 'Address is required!',
                                },
                            ]}
                        ><Input />
                        </Form.Item>
                        <Form.Item
                            label="Open at"
                            name="open"
                            rules={[
                                {
                                    required: true,
                                    message: 'Open time is required!',
                                },
                            ]}
                        ><Input />
                        </Form.Item>
                        <Form.Item
                            label="Close at"
                            name="close"
                            rules={[
                                {
                                    required: true,
                                    message: 'Close time is required!',
                                },
                            ]}
                        ><Input />
                        </Form.Item>
                        <Form.Item
                            label="Phone number"
                            name="number"
                            rules={[
                                {
                                    required: true,
                                    message: 'Phone number is required!',
                                },
                            ]}
                        ><Input />
                        </Form.Item>
                    </Form>
                </Modal>
                <Form layout='inline' onFinish={searchHandler}>
                    <Form.Item name='name'>
                        <Input placeholder="Store name" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType='submit'>Search</Button>
                    </Form.Item>
                </Form>
            </div>
            <Table columns={columns} dataSource={storeData} pagination={{defaultPageSize: 7}}/>
        </div>
    );
};

export default Store;