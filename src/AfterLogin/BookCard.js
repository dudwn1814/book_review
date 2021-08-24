import React from 'react';
import { Col, Row } from 'antd';
import turtle from '../Images/superturtle.jpg';
import { BookTitle, BookImg } from '../Style/styled';

// gutter: column 사이의 간격(=margin)
// span: 몇칸을 차지하는지

function BookCard() {
  return (
    <div>
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
    </div>
  );
}

export default BookCard;
