import { useEffect, useState } from 'react';
import { Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
// import 'antd/dist/antd.css';

const DashboardDrawer = () => {
    const [open, setOpen] = useState(false);

    // Function to handle the drawer visibility on different screen sizes
    const handleResize = () => {
        if (window.innerWidth >= 992) {
            setOpen(true); // open drawer for large screens
        } else {
            setOpen(false); // close drawer for medium and small screens
        }
    };

    useEffect(() => {
        handleResize(); // Set initial state
        window.addEventListener('resize', handleResize); // Add resize listener

        return () => {
            window.removeEventListener('resize', handleResize); // Cleanup listener on component unmount
        };
    }, []);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    // const onChange = (e) => {
    //     setPlacement(e.target.value);
    // };

    return (
        <>
            <Button
                type="primary"
                onClick={showDrawer}
                icon={<MenuOutlined />}
                style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 1000 }}
            />
            <Drawer
                title="Basic Drawer"
                placement="left"
                closable={false}
                onClose={onClose}
                visible={open}
                key="left"
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </>
    );
};

export default DashboardDrawer;
