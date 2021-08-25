import React from 'react';
import { Link } from 'react-router-dom';
import {
  BackgroundDiv,
  ContentDiv,
  CloseButton,
  StyledButton,
} from '../Style/styled';

function Findinfo() {
  return (
    <BackgroundDiv>
      <ContentDiv>
        <CloseButton>&times;</CloseButton>
        <h2 style={{ paddingTop: '80px' }}>도서정보</h2>
        <h3>입력 방법을 선택하세요</h3>
        <Link to='/search'>
          <StyledButton>검색</StyledButton>
        </Link>
        <br />
        <StyledButton>직접 입력</StyledButton>
      </ContentDiv>
    </BackgroundDiv>
  );
}

export default Findinfo;
