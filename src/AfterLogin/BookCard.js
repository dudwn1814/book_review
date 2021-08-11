import React from 'react';
import { Card } from 'antd';
import superturtle from './superturtle.jpg'; 


//한줄에 여러개 나오게 어떻게...?
const gridStyle = {
  width: '30%',
  textAlign: 'center',
};

function BookCard(){
  return(
    <div title="Card Title" style={{float:"right"}}>
    <Card.Grid style={gridStyle}><img alt="example" src={superturtle} />슈퍼 거북</Card.Grid>
    <Card.Grid style={gridStyle}><img alt="example" src={superturtle} />제목</Card.Grid>
    <Card.Grid style={gridStyle}><img alt="example" src={superturtle} />제목</Card.Grid>
    <Card.Grid style={gridStyle}><img alt="example" src={superturtle} />제목</Card.Grid>
    <Card.Grid style={gridStyle}><img alt="example" src={superturtle} />제목</Card.Grid>
    <Card.Grid style={gridStyle}><img alt="example" src={superturtle} />제목</Card.Grid>
    <Card.Grid style={gridStyle}><img alt="example" src={superturtle} />제목</Card.Grid>
    </div>
    );
}

export default BookCard;