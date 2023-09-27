import React from 'react';
import { Card, Row, Col } from 'antd';
import { SmileOutlined, HeartOutlined, StarOutlined, BellOutlined } from '@ant-design/icons';

const cardContent = [
    { icon: <SmileOutlined />, centerText: "No. of families enrolled", rightText: "9,935" },
    { icon: <HeartOutlined />, centerText: "Amount of benefits distributed", rightText: "120 Cr" },
    { icon: <StarOutlined />, centerText: "No. of citizen impacted", rightText: "15,86,817" },
    { icon: <BellOutlined />, centerText: "No. of Schemes Onboarded", rightText: "186" },
];

const CustomCard = ({ icon, centerText, rightText }) => (
    <Card
        bordered={false}
        style={{
            width: '100%',
            overflow: 'hidden',
            marginBottom: '20px',
            padding: '10px',
            borderRadius: '15px',
            transition: 'all 0.3s ease-in-out',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
        }}
        hoverable
    >
        <Row align="middle" justify="space-between">
            <Col>
                {/* Icon rendered dynamically */}
                {React.cloneElement(icon, { style: { fontSize: '24px', color: 'green' } })}
            </Col>
            <Col>
                <span style={{ fontWeight: 'bold' }}>{centerText}</span>
            </Col>
            <Col>
                <span style={{ color: 'grey' }}>{rightText}</span>
            </Col>
        </Row>
    </Card>
);

const CardComponent = () => (
    <div style={{ padding: '20px', overflow: 'hidden' }}>
        <style>
            {`
        .ant-card-hoverable {
          box-shadow: 0 4px 6px rgba(0,0,0,0.3);
        }

        .ant-card-hoverable:hover {
          box-shadow: 0 4px 8px rgba(0, 250, 0, 0.3);
          transform: translateY(-5px);
        }
      `}
        </style>
        <Row gutter={[16, 16]} justify="center">
            {cardContent.map((content, index) => (
                <Col key={index} xs={24} sm={12} md={8} lg={6}>
                    <CustomCard {...content} />
                </Col>
            ))}
        </Row>
    </div>
);

export default CardComponent;
