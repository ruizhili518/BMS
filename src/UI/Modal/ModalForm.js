import React from 'react';
import {Form, Input, Modal} from "antd";

const ModalForm = (props) => {
    return (
        <Modal title={props.title} open={props.isModalOpen} onOk={props.onOk} onCancel={props.onCancel}>
            <Form form={props.form} name="new" labelCol={{span: 6,}} wrapperCol={{span: 14,}}
                  style={{maxWidth: 600,}} initialValues={{remember: false}}
                  autoComplete="off" onFinish={props.onOk}>
                <Form.Item label="Name" name="name"
                           rules={[
                               {
                                   required: true,
                                   message: 'Store name is required!',
                               },
                           ]}
                ><Input />
                </Form.Item>
                <Form.Item label="Address" name="address"
                    rules={[
                        {
                            required: true,
                            message: 'Address is required!',
                        },
                    ]}
                ><Input />
                </Form.Item>
                <Form.Item label="Open at" name="open"
                    rules={[
                        {
                            required: true,
                            message: 'Open time is required!',
                        }
                    ]}
                ><Input />
                </Form.Item>
                <Form.Item label="Close at" name="close"
                    rules={[
                        {
                            required: true,
                            message: 'Close time is required!',
                        }
                    ]}
                ><Input />
                </Form.Item>
                <Form.Item label="Phone number" name="number"
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
    );
};

export default ModalForm;