import React from 'react';
import { Carousel } from 'antd';
import dummyGovt from '../../assets/dummy-govt.jpg';  // Adjust the path as needed
import dummyGovt1 from '../../assets/dummy-govt1.jpg';  // Adjust the path as needed

const contentStyle = {
    height: '80vh',  // Adjusted the height value
    color: '#fff',
    lineHeight: '80vh',  // Adjusted the line height value
    textAlign: 'center',
    background: '#364d79',
    display: 'flex',
    alignItems: 'center',  // Added to vertically center the content
    justifyContent: 'center',  // Added to horizontally center the content
};

const ImageCarousel: React.FC = () => {
    return (
           <Carousel autoplay style={{ maxHeight: '80vh', overflow: 'hidden' }}>
        <div>
            <img src={dummyGovt} alt="Dummy Government" style={{ width: '100%', height: '80vh', objectFit: 'cover' }} />
        </div>
        <div>
            <img src={dummyGovt1} alt="Dummy Government 1" style={{ width: '100%', height: '80vh', objectFit: 'cover' }} />
        </div>
    </Carousel>
    );
};

export default ImageCarousel;
