import React from 'react';
import {
  BackgroundDiv,
  ContentDiv,
  CloseButton,
  StyledButton,
} from '../Style/styled';

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
