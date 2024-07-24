import React from 'react';
import './Login.css'
import {Button, Card, Form, Input, message} from "antd";
import {useForm} from "antd/es/form/Form";
import {loginCheck} from "../../api/api";
import {Navigate, useNavigate} from "react-router-dom";

const Login = () => {
    const [loginForm] = useForm()
    const navigate = useNavigate();
    if(localStorage.getItem("token")){
        return <Navigate to={{pathname: '/home'}} replace/>;
    }

    const loginHandler = async () => {
        try{
            const res = await loginCheck(loginForm.getFieldsValue());
            localStorage.setItem("token", res.data.jwt);
            navigate("/home");
        } catch (e){
            message.error('Invalid user information! Please try again!');
        }
    }
    return (
        <Card className="login" title={"Sign in"}>
            <Form name="login_form" form={loginForm} labelCol={{ span: 7,}}
                wrapperCol={{
                    span: 14,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={loginHandler}
                // onFinishFailed={onFinishFailed}
                autoComplete="off">
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 17,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Sign in
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default Login;