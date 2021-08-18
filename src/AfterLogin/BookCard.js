import React from 'react';
import { Card, Col, Row } from 'antd';
import turtle from '../Images/superturtle.jpg';

// 페이지 사이즈를 내용에 따라 바뀌도록..

function BookCard() {
  return (
    <div className='site-card-wrapper'>
      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <img alt='example' src={turtle} />
            <h5 style={{ textAlign: 'center' }}>슈퍼거북</h5>
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <img alt='example' src={turtle} />
            <h5 style={{ textAlign: 'center' }}>슈퍼거북</h5>
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <img alt='example' src={turtle} />
            <h5 style={{ textAlign: 'center' }}>슈퍼거북</h5>
          </Card>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <img alt='example' src={turtle} />
            <h5 style={{ textAlign: 'center' }}>슈퍼거북</h5>
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <img alt='example' src={turtle} />
            <h5 style={{ textAlign: 'center' }}>슈퍼거북</h5>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default BookCard;
