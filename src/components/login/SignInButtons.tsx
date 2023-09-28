import React from 'react';
import { Button, Row, Col, Divider } from 'antd';
import { Typography } from 'antd';

const { Text } = Typography;

const SignInButtons: React.FC = () => {
    return (
        <div>
            <Row justify="center" style={{ marginTop: '10px' }}>
                <Col xs={18}>
                    <Button
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
                            <Text strong style={{ fontSize: '16px' }}>Adhaar</Text>
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
        </div>
    );
}

export default SignInButtons;
