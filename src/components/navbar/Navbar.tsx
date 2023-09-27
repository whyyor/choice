import { Component } from 'react';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';
import { Drawer, Button, Space } from 'antd'; // Import Space from antd
import { MenuOutlined } from '@ant-design/icons';
import choiceLogo from '../../assets/choice-logo.png';
import primusLogo from '../../assets/primus-logo.png';

interface State {
    current: string;
    visible: boolean;
}

interface Props { }

class Navbar extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            current: 'mail',
            visible: false,
        };
    }

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <nav className="menuBar">
                <div className="logo" style={{ paddingLeft: '20px' }}> {/* Added paddingLeft style */}
                    <a href="">
                        <Space size={0}> {/* Wrap the img tags with Space component */}
                            <img src={choiceLogo} alt="Choice Logo" style={{ width: '70%' }} />
                            <img src={primusLogo} alt="Primus Logo" style={{ width: '70%' }} />
                        </Space>
                    </a>
                </div>
                <div className="menuCon">
                    <div className="leftMenu">
                        <LeftMenu mode='horizontal' />
                    </div>
                    <div className="rightMenu">
                        <RightMenu mode='horizontal' />
                    </div>
                    <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
                        <MenuOutlined />
                    </Button>
                    <Drawer
                        placement="right"
                        closable={false}
                        onClose={this.onClose}
                        visible={this.state.visible}
                    >
                        <LeftMenu mode="vertical" />
                        <RightMenu mode="vertical" />
                    </Drawer>
                </div>
            </nav>
        );
    }
}

export default Navbar;
