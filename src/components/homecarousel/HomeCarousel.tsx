import React from 'react';
import { Carousel, Button } from 'antd';
import dummyGovt from '../../assets/dummy-govt.jpg';
import dummyGovt1 from '../../assets/dummy-govt1.jpg';

const ImageCarousel: React.FC = () => {
    return (
        <div style={{ position: 'relative', maxHeight: '80vh', overflow: 'hidden' }}>
            <Carousel autoplay style={{ maxHeight: '80vh', overflow: 'hidden' }}>
                <div>
                    <img src={dummyGovt} alt="Dummy Government" style={{ width: '100%', height: '80vh', objectFit: 'cover' }} />
                </div>
                <div>
                    <img src={dummyGovt1} alt="Dummy Government 1" style={{ width: '100%', height: '80vh', objectFit: 'cover' }} />
                </div>
            </Carousel>
            <div style={{
                position: 'absolute',
                bottom: '7.5%',
                left: '50%',
                transform: 'translateX(-50%)',
            }}>
                <Button
                    type="primary"
                    style={{ color: '#2b5a31', backgroundColor: '#ffc107', borderColor: '#ffc107', fontWeight: 'bold' }}
                >
                    Know Your Eligibility
                </Button>
            </div>
        </div>
    );
};

export default ImageCarousel;
