import React, { useState } from 'react';
import ModalBtn from './ModalBtn';
import styled from 'styled-components';

//style 적용 안됨ㅜ
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
    //     setIsModalVisible(false);
    // };


    return(
        <div>
            <h1>로그인 후 페이지</h1>
            <div>
                <ModalButton onClick={showModal}> 작성하기 </ModalButton>
                <ModalBtn visible={isModalVisible} onOk={handleOk} header="도서 정보">
                    모달 팝업 창 내용
                </ModalBtn>    
            </div>
        </div>
    );
}

export default Main;