import styled from 'styled-components';

// div
export const ReviewDiv = styled.div`
  padding: 24px;
  min-height: 360;
  background-color: #fff;
  height: 90vh;
  border-radius: 5%;
`;

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

// img
export const LogoImg = styled.img`
  height: 48px;
  margin: 24px;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const BookImg = styled.img`
  display: block;
  margin: 0px auto;
`;

// button
export const BottomButton = styled.button`
  position: fixed;
  text-align: center;
  margi-left: 10px;
  margin-bottom: 20px;
  bottom: 0;
  background-color: white;
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

// p, h
export const TitleP = styled.p`
  font-size: 25px;
  margin-bottom: 5px;
  text-indent: 20px;
`;

export const BookTitle = styled.h5`
  text-align: center;
`;

export default styled;
