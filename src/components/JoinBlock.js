import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { WechatOutlined, UserOutlined } from '@ant-design/icons';
import styled from 'styled-components'

const JoinBlockDiv = styled.div`
  padding: 30px;
  width: 300px;
  border-radius: 25px;
  border: 1px solid #a5a5a5;
`

const JoinBlock = () => {
    const onFinish = values => {
        console.log('Received values of form: ', values);
    };

    return (
        <JoinBlockDiv>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="roomId"
                    rules={[{ required: true, message: 'Please input room ID!' }]}
                >
                    <Input prefix={<WechatOutlined className="site-form-item-icon"/>} placeholder="Chat ID" />
                </Form.Item>

                <Form.Item
                    name="nickname"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                        prefix={<UserOutlined  className="site-form-item-icon" />}
                        placeholder="Nickname"
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Enter
                    </Button>
                </Form.Item>
            </Form>
        </JoinBlockDiv>
    )
}

export default JoinBlock