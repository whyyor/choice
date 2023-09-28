import React from 'react';
import { Row, Col, Button, Typography, Tabs, Card } from 'antd';
import { ArrowLeftOutlined, HomeOutlined } from '@ant-design/icons';
import dummyGovt1 from '../../assets/dummy-govt1.jpg';
import SignInButtons from './SignInButtons';
import SignUpButtons from './SignUpButtons';
import LoginOptions from './LoginOptions';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;
const { TabPane } = Tabs;

const LoginSection: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div style={{
            backgroundImage: `url(${dummyGovt1})`,
            backgroundSize: 'cover',
            height: '50vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Row justify="center" align="middle" style={{ width: '100%', height: '100%' }}>
                <Col xs={22} lg={10} style={{ height: '100%' }}>
                    <div style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.6)',
                        height: '100%',
                        padding: '20px'
                    }}>
                        <Row justify="space-between" align="middle">
                            <Button
                                type="primary"
                                style={{
                                    borderRadius: '5px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                                onClick={() => navigate('/')}  // Add onClick event to navigate to the root path
                            >
                                <ArrowLeftOutlined style={{ marginRight: '5px' }} />
                                <HomeOutlined />
                            </Button>
                            <Title level={4} style={{ margin: 0 }}>Please login to continue</Title>
                            <div></div>
                        </Row>

                        <Card bordered={false} style={{ marginTop: '20px' }}>
                            <Tabs
                                defaultActiveKey="1"
                                centered  // Added this to center the tabs
                                type="card"
                                size="large"
                            >
                                <TabPane
                                    tab={<span style={{ fontSize: '18px', padding: '0px 5vw' }}>Sign in</span>}
                                    key="1"
                                >
                                    <SignInButtons />
                                </TabPane>

                                <TabPane
                                    tab={<span style={{ fontSize: '18px', padding: '0px 5vw' }}>Sign up</span>}
                                    key="2"
                                >
                                    <SignUpButtons />
                                </TabPane>
                            </Tabs>
                        </Card>
                        <LoginOptions />
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default LoginSection;
