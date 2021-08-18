import React from 'react';
import { Layout, Input, AutoComplete } from 'antd';
import 'antd/dist/antd.css';
import { UserOutlined } from '@ant-design/icons';

// 화면이 작아졌을때 사이즈가 유동적으로 바뀌게...
// 옵션 바꾸기

const { Content } = Layout;

const renderTitle = (title) => (
  <span>
    {title}
    <a
      style={{
        float: 'right',
      }}
      href='https://www.google.com/search?q=antd'
      target='_blank'
      rel='noopener noreferrer'
    >
      more
    </a>
  </span>
);

const renderItem = (title, count) => ({
  value: title,
  label: (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {title}
      <span>
        <UserOutlined /> {count}
      </span>
    </div>
  ),
});

const options = [
  {
    label: renderTitle('도서명'),
    options: [
      renderItem('AntDesign', 10000),
      renderItem('AntDesign UI', 10600),
    ],
  },
  {
    label: renderTitle('작가명'),
    options: [
      renderItem('AntDesign UI FAQ', 60100),
      renderItem('AntDesign FAQ', 30010),
    ],
  },
  {
    label: renderTitle('출판사'),
    options: [renderItem('AntDesign design language', 100000)],
  },
];

function BookSearch() {
  return (
    <Layout>
      <Content style={{ height: '100vh' }}>
        <div
          className='site-layout-background'
          style={{
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
          <h2 style={{ paddingTop: '30px' }}>검색하기</h2>
          <AutoComplete
            dropdownClassName='certain-category-search-dropdown'
            dropdownMatchSelectWidth={500}
            style={{
              width: 400,
            }}
            options={options}
          >
            <Input.Search size='medium' placeholder='input here' />
          </AutoComplete>
        </div>
      </Content>
    </Layout>
  );
}

export default BookSearch;
