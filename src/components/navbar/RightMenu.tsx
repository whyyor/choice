import { Component } from 'react';
import { Menu, Button } from 'antd';
import { MenuProps } from 'antd/es/menu';

interface Props extends MenuProps {
    mode: 'horizontal' | 'vertical';
}

class RightMenu extends Component<Props> {
    render() {
        return (
            <Menu mode={this.props.mode}>
                <Button key="mail" type='primary'>
                    <a href="">Login</a>
                </Button>
            </Menu>
        );
    }
}

export default RightMenu;
