import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import Logo from '../Images/sampleLogo.png';
import BookCard from './BookCard';

const { Content, Footer, Sider } = Layout;

// 화면 크기 작아졌을때 -> trigger 없애기, 작성하기 버튼 위치 조절, 이미지 겹쳐짐

function Main() {
  return (
    <Layout>
      <Sider
        style={{ background: '#fff', height: '100vh' }}
        breakpoint='lg'
        collapsedWidth='0'
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className='logo'>
          <img
            src={Logo}
            alt='logo'
            style={{
              height: '48px',
              margin: '24px',
              background: 'rgba(255, 255, 255, 0.3)',
            }}
          />
        </div>
        <h2 style={{ marginLeft: '20px' }}>
          (닉네임)님 <br /> 반갑습니다.
        </h2>
        <Menu mode='inline'>
          <Menu.Item key='1' icon={<UserOutlined />}>
            마이페이지
          </Menu.Item>
        </Menu>
        <button
          type='button'
          style={{
            position: 'fixed',
            textAlign: 'center',
            marginLeft: '10px',
            marginBottom: '20px',
            bottom: '0',
            backgroundColor: 'white',
          }}
        >
          작성하기
        </button>
      </Sider>
      <Layout>
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            className='site-layout-background'
            style={{
              padding: 24,
              minHeight: 360,
              background: '#fff',
              height: '90vh',
              borderRadius: '5%',
            }}
          >
            <p
              style={{
                fontSize: '25px',
                marginBottom: '5px',
                textIndent: '20px',
              }}
            >
              Review
            </p>
            <p style={{ fontSize: '15px', textIndent: '20px' }}>
              총 n권의 도서에 대한 감상을 남겼습니다.
            </p>
            <BookCard />
          </div>
        </Content>
        {/* <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  );
}

export default Main;
