import styles from './index.less';
import { Layout, Menu } from 'antd';
import { Link } from 'umi';
const { Header, Content, Footer } = Layout;
const menuData = [
  { route: '/system/tokenHolder', name: '我是令主' },
  { route: '/system/tokenReceive', name: '我要接令' },
];

const BasicLayout = props => {
  const {
    location: { pathname },
    children,
  } = props;

  return (
    <Layout style={{ height: '100%', width: '100%', position: 'absolute' }}>
      <Header>
        <div className={styles.logo2}>召集令</div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[pathname]}
          style={{ lineHeight: '64px' }}
        >
          {menuData.map(menu => (
            <Menu.Item key={`${menu.route}`}>
              <Link to={menu.route}>{menu.name}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Header>
      <Content style={{ padding: '20px 30px' }}>
        <div style={{ background: '#fff', height: '100%' }}>
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Created by LYF、XF、CYN</Footer>
    </Layout>
  );
};

export default BasicLayout;
