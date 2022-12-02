import React, { ForwardRefExoticComponent, ReactElement } from 'react';
import { LaptopOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';

const { Header, Content, Sider } = Layout;

interface ListaItens {
  key :  string| number
  icon :ReactElement
  label : string
}
const listaDeItens : ListaItens[] = [
  {
    key: 1,
    icon: <UserOutlined/>,
    label: `Fabricantes`,
},
{
  key: 2,
  icon: <LaptopOutlined/>,
  label: `Produtos`,

}
]

const items2: MenuProps['items'] = listaDeItens.map(
  (item, index) => {
    const key = String(index + 1);

    return {
      key: item.key,
      icon: item.icon,
      label: item.label,

    };
  },
);

const App: React.FC = () => (
  <Layout>
    <Header className="header">
      <div className="logo" style={{color:'white'}}><h2>Plataforma Cadastro de Produtos</h2></div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} />
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
          items={items2}
        />
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  </Layout>
);

export default App;