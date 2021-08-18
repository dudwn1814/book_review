import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

const { Content } = Layout;

function WriteBtn() {
  return (
    <Layout>
      <Content style={{ height: '100vh' }}>
        <div
          className='site-layout-background'
          style={{
            textAlign: 'center',
            paddingBottom: 24,
            paddingLeft: 24,
            paddingRight: 24,
            background: '#fff',
            margin: '100px',
            marginRight: '200px',
            marginLeft: '200px',
          }}
        >
          <button
            type='button'
            style={{
              float: 'right',
              backgroundColor: 'white',
              border: 'none',
              fontSize: '20px',
            }}
          >
            &times;
          </button>
          <h2 style={{ paddingTop: '80px' }}>도서정보</h2>
          <h3>입력 방법을 선택하세요</h3>
          <button
            type='button'
            style={{ marginBottom: '10px', width: '110px' }}
          >
            검색
          </button>
          <br />
          <button type='button' style={{ width: '110px' }}>
            직접 입력
          </button>
          <h2 style={{ paddingBottom: '100px' }}> </h2>
        </div>
      </Content>
    </Layout>
  );
}

export default WriteBtn;
