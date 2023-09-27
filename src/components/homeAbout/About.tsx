import React from 'react';
import { Row, Col, Card } from 'antd';
import dummyImage from '../../../public/about-dummy.jpg';

const AboutSection: React.FC = () => {
    return (

        <div style={{ backgroundColor: '#f4f8fd', padding: '50px 20px', minHeight: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Row gutter={[16, 16]} justify="center" align="top" style={{ width: '100%' }}>
                <Col xs={24} style={{ textAlign: 'center' }}>
                    <div style={{ display: 'inline-block', backgroundColor: '#e7f1fd', borderRadius: '20px', padding: '10px' }}>
                        <h4 style={{ color: '#1c5335', margin: 0 }}>About Choice Platform</h4>
                    </div>
                </Col>
                <Col xs={24} style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '32px' }}>Find Out More <span style={{ color: '#1c5335' }}>About Us</span></h2> {/* Increase size here */}
                </Col>
                <Col xs={24} md={6} style={{ textAlign: 'start' }}>
                    <h3 style={{ color: '#444444', fontSize: '24px' }}>Choice - A citizen lead welfare delivery platform</h3> {/* Increase size here */}
                    <p style={{ color: 'gray', fontStyle: 'italic' }}>
                        Various States across the country have attempted to build a family based social registry however, none of them have been built with an objective to refine the existing welfare service delivery ecosystem.<br />
                        In order to bridge this gap existing in the welfare delivery systems across the country, we have developed an in-house beneficiary led welfare management platform called “CHOICE”.<br />
                        This platform is proposed to act as an enabler to build a social repository by allowing citizens to create his/her family in the platform. The data fields to be provided by the citizen have been meticulously chosen to encompass all such information which is essentially required by most of the Government welfare schemes to determine the eligibility of beneficiaries.<br />
                        Further, this platform also provides additional features which enable both the citizens and the policy makers to utilize the potential of the data collated through such a repository to its fullest.
                    </p>
                </Col>
                <Col xs={24} md={6} style={{ textAlign: 'center' }}>
                    <img src={dummyImage} alt="Dummy" style={{ width: '350px', height: 'auto' }} />
                </Col>
                <Col xs={24} md={6} style={{ textAlign: 'center' }}>
                    <Card
                        bordered={true}
                        style={{ width: '100%', height: '100%', marginLeft: 'auto', marginRight: 'auto' }}
                        title="Card Title"
                    >
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default AboutSection;
