import React from 'react';
import styled from 'styled-components';

export const BackgroundDiv = styled.div`
  background: rgba(0, 0, 0, 0.3);
  height: 100vh;
`;

export const ContentDiv = styled.div`
  text-align: center;
  padding-bottom: 100px;
  padding-left: 24;
  padding-right: 24;
  background-color: #fff;
  margin-right: 200px;
  margin-left: 200px;
`;

export const CloseButton = styled.button`
  float: right;
  background-color: #fff;
  border: none;
  font-size: 20px;
`;

export const StyledButton = styled.button`
  margin-top: 10px;
  width: 110px;
`;

function WriteBtn() {
  return (
    <BackgroundDiv>
      <ContentDiv>
        <CloseButton>&times;</CloseButton>
        <h2 style={{ paddingTop: '80px' }}>도서정보</h2>
        <h3>입력 방법을 선택하세요</h3>
        <StyledButton>검색</StyledButton>
        <br />
        <StyledButton>직접 입력</StyledButton>
      </ContentDiv>
    </BackgroundDiv>
  );
}

export default WriteBtn;
