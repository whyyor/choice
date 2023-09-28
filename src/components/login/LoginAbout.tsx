import React from 'react';
import { Row, Col, Typography } from 'antd';
import dummyImage from '../../../public/login-dummy.jpg';

const { Title, Paragraph } = Typography;

const AboutChoice: React.FC = () => {
    return (
        <div style={{ minHeight: '40vh', padding: '10vh 0vh' }}> {/* Added padding for spacing */}
            <Row justify="space-evenly" align="stretch" style={{ height: '100%' }}>
                <Col xs={20} lg={12}>
                    <Title level={3} style={{ fontWeight: 'bold' }}>About Choice Platform</Title>
                    <Paragraph>
                        Various States across the country have attempted to build a family based social registry
                        however, none of them have been built with an objective to refine the existing welfare
                        service delivery ecosystem. In order to bridge this gap existing in the welfare delivery
                        systems across the country, we have developed an in-house beneficiary led welfare
                        management platform called “CHOICE”.
                        <br /><br />
                        This platform is proposed to act as an enabler to build a social repository by allowing
                        citizens to create his/her family in the platform. The data fields to be provided by the
                        citizen have been meticulously chosen to encompass all such information which is essentially
                        required by most of the Government welfare schemes to determine the eligibility of beneficiaries.
                        <br /><br />
                        Further, this platform also provides additional features which enable both the citizens and
                        the policy makers to utilize the potential of the data collated through such a repository to
                        its fullest.
                    </Paragraph>
                </Col>

                <Col xs={20} lg={8}>
                    <img
                        src={dummyImage}
                        alt="Choice Platform"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </Col>

            </Row>
        </div>
    );
}

export default AboutChoice;
