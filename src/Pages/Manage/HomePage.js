import React from 'react';
import { Layout, Menu } from 'antd';
import {
    SearchOutlined,
    BookOutlined,
    DingdingOutlined,
    DeploymentUnitOutlined,
    TeamOutlined,
    SnippetsOutlined,
    CloudUploadOutlined,
} from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;
const labels = [
    'Search',
    'Summary',
    'Skills',
    'Learning',
    'Badging',
    'Reports',
    'Upload Files'
]
const items = [
    SearchOutlined,
    BookOutlined,
    DingdingOutlined,
    DeploymentUnitOutlined,
    TeamOutlined,
    SnippetsOutlined,
    CloudUploadOutlined,
].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `${labels[index]}`,
}));

const HomePage = () => (
    <Layout hasSider>
        <Sider
            collapsible
            defaultCollapsed
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                top: 0,
                bottom: 0,
                margin: 0
            }}
        >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
        </Sider>
        <Layout
            className="site-layout"
        >
            <Header
                className="site-layout-background"
                style={{
                    padding: 0,
                }}
            />
            <Content
                style={{
                    margin: '24px 16px 0',
                    overflow: 'initial',
                }}
            >
                <div
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        textAlign: 'center',
                    }}
                >

                    content
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Skills UI ©2022
            </Footer>
        </Layout>
    </Layout>
);

export default HomePage;