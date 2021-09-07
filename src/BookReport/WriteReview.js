import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Rate } from 'antd';
import 'antd/dist/antd.css';
import Logo from '../Images/sampleLogo.png';
import { ReviewDiv, LogoImg, StyledButton } from '../Style/styled';

const { Content, Sider } = Layout;

function WriteReview() {
  return (
    <Layout>
      <Sider
        style={{ background: '#fff', height: '100vh' }}
        breakpoint='lg'
        collapsedWidth='0'
      >
        <LogoImg src={Logo} alt='logo' />

        <Menu mode='inline'>
          <Menu.Item key='1'>
            {/* 책 이미지로 바꾸기 */}
            <LogoImg src={Logo} alt='logo' />
          </Menu.Item>
          <Menu.Item key='2'>책 제목</Menu.Item>
          <Menu.Item key='3'>작가</Menu.Item>
          <Menu.Item key='4'>출판일</Menu.Item>
          <Menu.Item key='5'>발매일</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ margin: '24px 16px 0' }}>
          <ReviewDiv>
            <Rate allowHalf defaultValue={2.5} />
            <br />
            <br />
            <input
              placeholder='제목'
              style={{ resize: 'none', width: '90%' }}
            />
            <br />
            <br />
            <textarea
              style={{ resize: 'none', width: '90%', height: '70%' }}
              placeholder='내용'
            />
            <br />
            <Link to='/'>
              <StyledButton>취소</StyledButton>
            </Link>
            <StyledButton>저장</StyledButton>
          </ReviewDiv>
        </Content>
      </Layout>
    </Layout>
  );
}

export default WriteReview;
