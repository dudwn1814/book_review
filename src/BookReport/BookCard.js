import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Col, Row } from 'antd';
import turtle from '../Images/superturtle.jpg';
import { BookTitle, BookImg } from '../Style/styled';

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};

// gutter: column 사이의 간격(=margin)
// span: 몇칸을 차지하는지

// 페이지 크기에 따라 개수 조절하기 -> col를 component로 만들어서.. span, title, image를 props로, 이 파일에서 서버를 통해
// db에서 필요한걸 가져오는,, (리스트로) -> 이 파일에서 for 문을 통해 보여주기 아니면 뭐 table을 통해 리스트를 넣어서 착착착!
// ex) [ {title:어쩌구, omg:어쩌구 },{}...]

function BookCard() {
  return (
    <div>
      <Default>
        <Row gutter={0}>
          <Col span={8}>
            <BookImg alt='example' src={turtle} />
            <BookTitle>슈퍼거북</BookTitle>
          </Col>
          <Col span={8}>
            <BookImg alt='example' src={turtle} />
            <BookTitle>슈퍼거북</BookTitle>
          </Col>
          <Col span={8}>
            <BookImg alt='example' src={turtle} />
            <BookTitle>슈퍼거북</BookTitle>
          </Col>
          <Col span={8}>
            <BookImg alt='example' src={turtle} />
            <BookTitle>슈퍼거북</BookTitle>
          </Col>
        </Row>
      </Default>
      <Mobile>
        <Row gutter={0}>
          <Col span={12}>
            <BookImg alt='example' src={turtle} />
            <BookTitle>슈퍼거북</BookTitle>
          </Col>
          <Col span={12}>
            <BookImg alt='example' src={turtle} />
            <BookTitle>슈퍼거북</BookTitle>
          </Col>
          <Col span={12}>
            <BookImg alt='example' src={turtle} />
            <BookTitle>슈퍼거북</BookTitle>
          </Col>
          <Col span={12}>
            <BookImg alt='example' src={turtle} />
            <BookTitle>슈퍼거북</BookTitle>
          </Col>
        </Row>
      </Mobile>
    </div>
  );
}

export default BookCard;
