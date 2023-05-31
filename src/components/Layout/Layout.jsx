import { Layout, Space, Menu, Card, Button } from 'antd';
import { MailOutlined, SettingOutlined, MenuUnfoldOutlined, MenuFoldOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons';
import SubMenu from 'antd/es/menu/SubMenu';
import { ChartArea, ChartWaterfall } from 'components/Chart';
import { CardContent } from 'components/Card';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
const { Header, Footer, Sider, Content } = Layout;
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
function LayOut({ children }) {
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    return (
        <Layout>
            <Header>Header</Header>
            <Layout>
                <Sider>

                    <Menu mode='inline'>
                        <Menu.Item >
                            <PieChartOutlined />
                            <NavLink to='/'></NavLink>
                            Dashboard
                        </Menu.Item>

                        <Menu.Item>
                            <UserOutlined />
                            <NavLink to='/Users'></NavLink>
                            Users
                        </Menu.Item>

                        <Menu.Item>
                            <NavLink to='/'></NavLink>
                            Dashboard
                        </Menu.Item>

                        <Menu.Item>
                            <NavLink to='/'></NavLink>
                            Dashboard
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Content style={{ padding: '30px 50px' }}>
                        {children}
                    </Content>
                    <Footer>footer</Footer>
                </Layout>
            </Layout>
        </Layout>
    )
}
export default LayOut
