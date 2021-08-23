import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';
import turtle from '../Images/superturtle.jpg';

// gutter: column 사이의 간격(=margin)
// span: 몇칸을 차지하는지

export const BookTitle = styled.h5`
  text-align: center;
`;

export const BookImg = styled.img`
  margin-left: 15px;
  margin-top: 20px;
`;

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
