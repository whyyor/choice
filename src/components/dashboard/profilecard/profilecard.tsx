import { Button, Row, Col, Card, Space } from 'antd';
import LineChart from '../linechart/lineChart'; // Adjust path according to your project structure

const ProfileCard = () => (
    <div style={{ padding: '20px' }}> {/* Added padding to give inner space */}
        <Row align="bottom" gutter={16} style={{ marginBottom: '20px' }}>
            <Col span={4}>
                <div style={{ border: '2px dotted #ccc', borderRadius: '50%', width: '64px', height: '64px' }}></div>
            </Col>
            <Col span={20}>
                <div style={{ color: '#1c5335', fontSize: '24px', marginBottom: '10px' }}>Welcome! Renjith Vaikhom</div>
                <Space size="large" style={{ width: '100%', justifyContent: 'space-between'}}>
                    <Button>Application Pending</Button>
                    <Button>Grievance Pending</Button>
                    <Button>Correction Pending</Button>
                </Space>
            </Col>
        </Row>
        <Row gutter={[16, 16]} style={{ marginBottom: '20px' }}>
            <Col span={6}>
                <Card
                    style={{
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px rgba(28, 83, 53, 0.2)',
                        padding: '20px',
                        height: '100px' // Added minHeight to ensure consistent card height
                    }}
                >
                </Card>
            </Col>
            <Col span={6}>
                <Card
                    style={{
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px rgba(28, 83, 53, 0.2)',
                        padding: '20px',
                        height: '100px' // Added minHeight to ensure consistent card height
                    }}
                >
                </Card>
            </Col>
            <Col span={6}>
                <Card
                    style={{
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px rgba(28, 83, 53, 0.2)',
                        padding: '20px',
                        height: '100px' // Added minHeight to ensure consistent card height
                    }}
                >
                </Card>
            </Col>
            <Col span={6}>
                <Card
                    style={{
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px rgba(28, 83, 53, 0.2)',
                        padding: '20px',
                        height: '100px' // Added minHeight to ensure consistent card height
                    }}
                >
                </Card>
            </Col>
        </Row>
        <Card
            style={{
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(28, 83, 53, 0.2)',
                padding: '20px',
            }}
        >
            <LineChart />
        </Card>
    </div>
);

export default ProfileCard;
