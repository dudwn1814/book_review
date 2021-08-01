import React, { useState } from 'react';
import ModalBtn from './ModalBtn';
import styled from 'styled-components';

//style 적용 안됨ㅜ
const modalButton = styled.button`
    display: "flex";
    justifyContent: "center";
    alignItems: "center";
    position: "fixed";
    bottom: 30;
    left: 0;
    width: "100%";
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
                <modalButton onClick={showModal}> 작성하기 </modalButton>
                <ModalBtn visible={isModalVisible} onOk={handleOk} header="도서 정보">
                    모달 팝업 창 내용
                </ModalBtn>    
            </div>
        </div>
    );
}

export default Main;