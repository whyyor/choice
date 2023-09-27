import { Component } from 'react';
import { Menu } from 'antd';
import { MenuProps } from 'antd/lib/menu';
const { Item }: typeof Menu = Menu;

interface Props extends MenuProps { }  // You can extend this to include your specific prop types

class LeftMenu extends Component<Props> {
    render() {
        return (
            <Menu mode="horizontal">
                <Item key="home">
                    <a href="">Home</a>
                </Item>
                <Item key="scheme">
                    <a href="">Schemes</a>
                </Item>
                <Item key="eligible">
                    <a href="">Know your eligibility</a>
                </Item>
                <Item key="contact">
                    <a href="">Contact</a>
                </Item>
                {/* <SubMenu title={<span>About</span>}> */}
                {/*     <ItemGroup title="Item 1"> */}
                {/*         <Item key="setting:1">Option 1</Item> */}
                {/*         <Item key="setting:2">Option 2</Item> */}
                {/*     </ItemGroup> */}
                {/*     <ItemGroup title="Item 2"> */}
                {/*         <Item key="setting:3">Option 3</Item> */}
                {/*         <Item key="setting:4">Option 4</Item> */}
                {/*     </ItemGroup> */}
                {/* </SubMenu> */}
            </Menu>
        );
    }
}

export default LeftMenu;
