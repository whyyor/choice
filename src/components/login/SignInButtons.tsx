import React, { useState } from 'react';
import { Button, Row, Col, Divider, Modal, Form, Input } from 'antd';
import { Typography } from 'antd';
import { MailOutlined } from '@ant-design/icons';

const { Text } = Typography;

const SignInButtons: React.FC = () => {
    const [isAadhaarModalVisible, setIsAadhaarModalVisible] = useState(false);
    const [isChoiceModalVisible, setIsChoiceModalVisible] = useState(false);

    const showAadhaarModal = () => {
        setIsAadhaarModalVisible(true);
    };

    const showChoiceModal = () => {
        setIsChoiceModalVisible(true);
    };

    const handleClose = () => {
        setIsAadhaarModalVisible(false);
        setIsChoiceModalVisible(false);
    };

    return (
        <div>
            <Row justify="center" style={{ marginTop: '10px' }}>
                <Col xs={18}>
                    <Button
                        onClick={showAadhaarModal}
                        type="primary"
                        style={{
                            backgroundColor: '#FFC107',
                            borderColor: '#FFC107',
                            width: '100%',
                            justifyContent: 'center',
                            display: 'flex',
                            borderRadius: '4px'
                        }}
                    >
                        <div>
                            <Text style={{ fontSize: '16px' }}>Login with</Text>&nbsp;
                            <Text strong style={{ fontSize: '16px' }}>Aadhaar</Text>
                        </div>
                    </Button>
                </Col>
            </Row>
            <Row justify="center" style={{ margin: '10px 0' }}>
                <Col xs={18}>
                    <Divider>or</Divider>
                </Col>
            </Row>
            <Row justify="center">
                <Col xs={18}>
                    <Button
                        onClick={showChoiceModal}
                        type="primary"
                        style={{
                            backgroundColor: '#17a2b8',
                            borderColor: '#17a2b8',
                            width: '100%',
                            justifyContent: 'center',
                            display: 'flex',
                            borderRadius: '4px'
                        }}
                    >
                        <div>
                            <Text style={{ fontSize: '16px', color: 'white' }}>Login with</Text>&nbsp;
                            <Text strong style={{ fontSize: '16px', color: 'white' }}>Choice ID</Text>
                        </div>
                    </Button>
                </Col>
            </Row>

            <Modal
                title="Login with Aadhaar"
                visible={isAadhaarModalVisible}
                onOk={handleClose}
                onCancel={handleClose}
                footer={[
                    <Button key="submit" type="primary" onClick={handleClose}>Send OTP</Button>,
                ]}
            >
                <Form>
                    <Form.Item name="aadhaar" rules={[{ required: true, message: 'Please input your Aadhaar number!' }]}>
                        <Input
                            prefix={<MailOutlined />}
                            placeholder="Enter Aadhaar number"
                        />
                    </Form.Item>
                </Form>
            </Modal>

            <Modal
                title="Login with Choice ID"
                visible={isChoiceModalVisible}
                onOk={handleClose}
                onCancel={handleClose}
                footer={[
                    <Button key="submit" type="primary" onClick={handleClose}>Submit</Button>,
                ]}
            >
                <Form>
                    <Form.Item name="choiceId" rules={[{ required: true, message: 'Please input your Choice ID!' }]}>
                        <Input
                            prefix={<MailOutlined />}
                            placeholder="Enter Choice ID"
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}

export default SignInButtons;
