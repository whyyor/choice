import { Card, List, Tag } from 'antd';

const data = [
    {
        action: 'Review additional eligible scheme to Renjith.',
        color: 'green',
    },
    {
        action: 'Review Pension scheme details eligible for dasdas.',
        color: 'red',
    },
    {
        action: 'Update Self Passbook.',
        color: 'blue',
    },
    {
        action: 'Add one more Bank Account',
        color: 'skyblue',
    },
];

const ActionCard = () => (
    <Card
        title={<span style={{ color: '#1c5335' }}>Actions</span>}
        style={{
            marginTop: '20px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            borderRadius: '5px',
            borderColor: 'transparent',
        }}
        bordered={false}
    >
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
                <List.Item>
                    <span
                        style={{
                            backgroundColor: item.color,
                            borderRadius: '50%',
                            display: 'inline-block',
                            height: '12px',
                            width: '12px',
                            marginRight: '10px',
                        }}
                    ></span>
                    {item.action}
                </List.Item>
            )}
        />
    </Card>
);

export default ActionCard;
