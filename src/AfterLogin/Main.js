import React from 'react';
import styled from 'styled-components';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import Logo from '../Images/sampleLogo.png';
import BookCard from './BookCard';

// breakpoint: 화면 크기에 따라 줄이는 버튼이 나타남 (xs, sm, md, lg, xl, xxl)
// collapsed: 현재 상태 설정?(boolean)
// collapsedWidth: sidebar의 넓이, 0으로 돼있을때 버튼 나타남 (default는 80)
// onBreakpoint: callback 함수, breakpoints가 바뀌었을때 실행됨..
// onCollapse: callback 함수, trigger가 눌렸거나 반응형 레이아웃이 실행중일때 실행..

const { Content, Sider } = Layout;

export const ReviewDiv = styled.div`
  padding: 24px;
  min-height: 360;
  background-color: #fff;
  height: 90vh;
  border-radius: 5%;
`;

export const LogoImg = styled.img`
  height: 48px;
  margin: 24px;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const BottomButton = styled.button`
  position: fixed;
  text-align: center;
  margi-left: 10px;
  margin-bottom: 20px;
  bottom: 0;
  background-color: white;
`;

export const TitleP = styled.p`
  font-size: 25px;
  margin-bottom: 5px;
  text-indent: 20px;
`;

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
        <LogoImg src={Logo} alt='logo' />

        <h2 style={{ marginLeft: '20px' }}>
          (닉네임)님 <br /> 반갑습니다.
        </h2>
        <Menu mode='inline'>
          <Menu.Item key='1'>마이페이지</Menu.Item>
        </Menu>
        <BottomButton>작성하기</BottomButton>
      </Sider>
      <Layout>
        <Content style={{ margin: '24px 16px 0' }}>
          <ReviewDiv>
            <TitleP>Review</TitleP>
            <TitleP style={{ fontSize: '15px' }}>
              총 n권의 도서에 대한 감상을 남겼습니다.
            </TitleP>
            <BookCard />
          </ReviewDiv>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Main;
