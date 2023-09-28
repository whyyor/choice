import React from 'react';
import { Row, Col, Button } from 'antd';

const LoginOptions: React.FC = () => {
    return (
        <div style={{ width: '100%', textAlign: 'center' }}> 
            <Row gutter={[16, 20]} justify="center" style={{ marginTop: '20px' }}> 
                <Col xs={18} md={8}>
                    <Button
                        style={{
                            backgroundColor: '#1c5335',
                            borderColor: '#1c5335',
                            color: 'white',
                            width: '100%',
                        }}
                    >
                        Department Login
                    </Button>
                </Col>
                <Col xs={18} md={8}>
                    <Button
                        style={{
                            backgroundColor: '#e7842f',
                            color: 'white',
                            width: '100%',
                            borderColor: '#e7842f'
                        }}
                    >
                        State Login
                    </Button>
                </Col>
            </Row>
        </div>
    );
}

export default LoginOptions;
