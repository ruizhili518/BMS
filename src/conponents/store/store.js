import React, {useEffect, useState} from 'react';
import './store.css'
import {Button, Form, Input, message, Popconfirm, Space, Table} from "antd";
import {addStore, deleteStoreById, getStore, updateStore} from "../../api/api";
import ModalForm from "../../UI/Modal/ModalForm";

const Store = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const showAddModal = () => {
        setIsAddModalOpen(true);
    };

    const handleAddOk = async () => {
        const inputData = myForm.getFieldsValue();
        try {
            await addStore(inputData)
            const newData = await getData().then();
            setOriStoreData(newData);
            setStoreData(newData);
            setIsAddModalOpen(false);
            message.success('Added successfully.');
        }catch(err) {
            message.error('Please check your input!');
        }
        myForm.resetFields();
    };

    const handleAddCancel = () => {
        setIsAddModalOpen(false);
        myForm.resetFields();
    };

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [curId,setCurId] = useState(null);

    const showEditModal = (curData) => {
        //Show the modal and return the data to the form. Make a deep copy of the data and manipulate the copy in case the user want to roll back.
        setIsEditModalOpen(true);
        const copy = JSON.parse(JSON.stringify(curData));
        delete copy.key;
        setCurId(curData.key);
        myForm.setFieldsValue(copy);
    };

    const handleEditCancel = () => {
        setIsEditModalOpen(false);
        myForm.resetFields();
    };

    const editHandler = async () => {
        const inputData = myForm.getFieldsValue();
        try{
            await updateStore(curId, inputData);
            const newData = await getData().then();
            setOriStoreData(newData);
            setStoreData(newData);
            setIsEditModalOpen(false);
            message.success('Edit successfully.');
        }catch(e) {
            message.error('Please check your input!');
        }
        myForm.resetFields();
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

    // Initialize the columns name of the table (with buttons).
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
                <>
                <Space size="middle">
                    <Button type={"primary"} style={{width: '90rem'}} onClick={() => showEditModal(data)}>Edit</Button>
                    <ModalForm title={"Edit store information."} isModalOpen={isEditModalOpen}
                               onOk={editHandler} onCancel={handleEditCancel} form={myForm}/>
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
            </>
            ),
        },
    ];

    const [myForm] = Form.useForm();

    return (
        <div className="user">
            <div className="user__topBar">
                <Button type="primary" onClick={showAddModal}>+ Add</Button>
                <ModalForm title={"Add new store information."} isModalOpen={isAddModalOpen}
                           onOk={handleAddOk} onCancel={handleAddCancel} form={myForm}/>
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