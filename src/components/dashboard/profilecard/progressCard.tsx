import { Card, Progress } from 'antd';

const ProfileProgressCard = () => {
    return (
        <Card
            style={{
                boxShadow: '0 4px 6px rgba(28, 83, 53, 0.2)',
            }}
        >
            <div style={{ color: '#1c5335', fontSize: '18px', paddingBottom:'10px' }}>Profile Completion</div>
            <Progress percent={70} status="active" strokeColor={'green'} />
        </Card>
    );
};

export default ProfileProgressCard;
