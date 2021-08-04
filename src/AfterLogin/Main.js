import React, { useState } from 'react';
import ModalBtn from './ModalBtn';
import styled from 'styled-components';
import BookSearch from './BookSearch';
import BookCard from './BookCard';

const ModalButton = styled.button`
    display: flex;
    justifyContent: center;
    alignItems: center;
    position: fixed;
    bottom: 30px;
    left: 5px;
    width: 10%;
    height: 50;
`;

function Main(){
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    // const handleCancel = () => {
    //   setIsModalVisible(false);
    // };

    const [isSearchModalVisible, setIsSearchModalVisible] = useState(false);

    const showSearchModal = () => {
        setIsSearchModalVisible(true);
    };

    const SearchhandleOk = () => {
        setIsSearchModalVisible(false);
    };

    const [isInputModalVisible, setIsInputModalVisible] = useState(false);

    const showInputModal = () => {
        setIsInputModalVisible(true);
    };

    const InputhandleOk = () => {
        setIsInputModalVisible(false);
    };


//두번째 modalBtn 클릭시 첫번째 modal삭제 --> onClick 이벤트 2개 가능?
    return(
        <div>
            <h1>로그인 후 페이지</h1>
            <BookCard/>
            <div>
                <ModalButton onClick={showModal}> 작성하기 </ModalButton>
                <ModalBtn visible={isModalVisible} onOk={handleOk} header="도서 정보">
                    입력 방법을 선택하세요.<br/>
                    <button onClick={showSearchModal}> 검색 </button>
                    <ModalBtn visible={isSearchModalVisible} onOk={SearchhandleOk} header="검색하기">
                        <BookSearch/>
                    </ModalBtn>
                    <button onClick={showInputModal}>직접입력</button>
                    <ModalBtn visible={isInputModalVisible} onOk={InputhandleOk} header="직접 입력하기">
                        책 제목<br/>
                        저자명<br/>
                        출판사<br/>
                        발매일<br/>
                        책표지<br/>
                    </ModalBtn>
                </ModalBtn>    
            </div>
        </div>
    );
}

export default Main;