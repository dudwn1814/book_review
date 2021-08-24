import React from 'react';
import { Input, AutoComplete } from 'antd';
import 'antd/dist/antd.css';
import { UserOutlined } from '@ant-design/icons';
import { BackgroundDiv, ContentDiv, CloseButton } from '../Style/styled';

// dropdownClassName: 드롭다운 메뉴의 class name
// dropdownMatchSelectWidth: 드롭다운 메뉴와 input의 길이를 동일하게(default는 동일, boolean)
// options: { label, value }[] 형식
//  value: 선택된 옵션

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
    <BackgroundDiv>
      <ContentDiv>
        <CloseButton>&times;</CloseButton>
        <h2 style={{ paddingTop: '30px' }}>검색하기</h2>
        <AutoComplete
          dropdownClassName='certain-category-search-dropdown'
          // dropdownMatchSelectWidth={}
          style={{
            width: '80%',
          }}
          options={options}
        >
          <Input.Search size='medium' placeholder='input here' />
        </AutoComplete>
      </ContentDiv>
    </BackgroundDiv>
  );
}

export default BookSearch;
