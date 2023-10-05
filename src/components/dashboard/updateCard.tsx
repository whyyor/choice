import { Card, List } from 'antd';
import update1 from '../../assets/update-img1.jpg';
import update2 from '../../assets/update-img2.jpg';
import update3 from '../../assets/update-img3.png';

const data = [
    {
        image: update1,
        text: 'Odisha to come up with social registry for all welfare programmes',
    },
    {
        image: update2,
        text: 'Bihar plans common database for Aadhaar-verified beneficiaries of all schemes',
    },
    {
        image: update3,
        text: 'Parivar Pehchan Patra to facilitate delivery of 456 govt services',
    },
];

const UpdateCard = () => (
    <Card
        title="Updates"
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
                    <div style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <img
                            src={item.image}
                            alt="update"
                            style={{
                                borderRadius: '10%',
                                width: '70px',
                                height: 'auto',
                                marginRight: '20px',
                            }}
                        />
                        <div style={{
                            color: '#1c5335',
                            height: '70px',
                            display: 'flex',
                            fontWeight: 'bold',
                            alignItems: 'center'
                        }}>
                            {item.text}
                        </div>
                    </div>
                </List.Item>
            )}
        />
    </Card>
);

export default UpdateCard;
