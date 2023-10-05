import React, { useState } from 'react';
import { Drawer, Menu, Button, Row, Col, Card, Space } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import ProfileCard from '../components/dashboard/profilecard/profilecard';
import ProfileProgressCard from '../components/dashboard/profilecard/progressCard'
import MembersTable from '../components/dashboard/membersTable'
import ActionCard from '../components/dashboard/actionCard'
import UpdateCard from '../components/dashboard/updateCard'
import choiceLogo from '../assets/choice-logo.png'; // Import the logo images
import primusLogo from '../assets/primus-logo.png';

// Function to create menu items without icons
function getItem(label, key) {
  return {
    key,
    label,
  };
}

// Updated single-level menu items data without icons
const items = [
  getItem('Dashboard', '1'),
  getItem('Manage your family', '2'),
  getItem('View all schemes', '3'),
  getItem('View your beneficiary', '4'),
  getItem('Manage Grievance', '5'),
  getItem('Activities', '6'),
];

const App = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', background: '#fff', padding: '0 24px', boxShadow: '0 4px 8px rgba(28, 83, 53, 0.2)' }}>
        <Button
          type="text"
          icon={React.createElement(
            visible ? MenuUnfoldOutlined : MenuFoldOutlined,
            { style: { fontSize: '30px', paddingTop: '0px' } }  // Increase the fontSize value as needed
          )}
          onClick={showDrawer}
          style={{
            border: 'none',
            padding: 0  // Set padding to 0 to minimize the impact on the navbar size
          }}
        />
        <div className="logo" style={{ paddingTop: '10px', paddingBottom: '10px', paddingLeft: '20px' }}>
          <a href="">
            <Space size={0}>
              <img src={choiceLogo} alt="Choice Logo" style={{ width: '70%' }} />
              <img src={primusLogo} alt="Primus Logo" style={{ width: '70%' }} />
            </Space>
          </a>
        </div>
      </div>

      <Drawer
        title="Menu"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <Menu mode="inline" defaultSelectedKeys={['1']} items={items} />
      </Drawer>
      <div
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
          background: '#fff',
        }}
      >
        <Row gutter={16}>
          <Col xs={24} md={24} lg={14}>
            <Card
              style={{
                width: '100%',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              }}
              bordered={false}
            >
              <ProfileCard />
            </Card>
          </Col>
          <Col xs={24} md={24} lg={10}>
            <ProfileProgressCard />
            <Button
              type="primary"
              style={{
                color: '#2b5a31',
                backgroundColor: '#ffc107',
                borderColor: '#ffc107',
                fontWeight: 'bold',
                marginTop: '20px',
                width: '100%' // Optional: Make the button take the full width of the card
              }}
            >
              Update your adhaar
            </Button>
            <ActionCard />
            <UpdateCard />
          </Col>
        </Row>
        <Row style={{ marginTop: '20px' }}>
          <Col span={24}>
            <MembersTable />
          </Col>
        </Row>
      </div>
    </>
  );
}


export default App;
