import React from 'react';
import { Card } from 'antd';

//  한줄에 여러개 나오게 어떻게...?

const gridStyle = {
  width: '20%',
  textAlign: 'center',
};

function BookCard() {
  return (
    <Card title='Card Title'>
      {/* <Card.Grid style={gridStyle}><img alt="example" src={superturtle} />슈퍼 거북</Card.Grid> */}
      <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
    </Card>
  );
}

export default BookCard;
