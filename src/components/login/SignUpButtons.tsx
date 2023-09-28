import React from 'react';
import { Button, Row, Col, Typography, Space } from 'antd';

const { Text } = Typography;

const SignUpButtons: React.FC = () => {
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
                            borderRadius: '2px'
                        }}
                    >
                        <div>
                            <Text style={{ fontSize: '16px' }}>Sign up with</Text>&nbsp;
                            <Text strong style={{ fontSize: '16px' }}>Adhaar</Text>
                        </div>
                    </Button>
                </Col>
            </Row>
            <Row justify="center" style={{ margin: '10px 0', padding: '10px 0' }}>
                <Col xs={18} style={{ textAlign: 'center' }}>
                    <Text
                        strong
                        style={{
                            fontSize: '14px', // Decreased font size
                            color: '#1c5335'  // Changed the color
                        }}
                    >
                        Click here
                    </Text>&nbsp;
                    <Text style={{ fontSize: '14px', color: '#1c5335' }}>in case you don't have an Adhaar number</Text>
                </Col>
            </Row>
        </div>
    );
}

export default SignUpButtons;
