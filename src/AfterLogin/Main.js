import React from 'react';
import BookCard from './BookCard';
import sampleLogo from './sampleLogo.png'; 

function Main(){
    return(
        <div>
            <img src={sampleLogo} style={{height:"100px", width:"100px"}}/>
            <h3>(닉네임)님<br/> 반갑습니다</h3>
            <div>
                <BookCard style={{position: "absolute", right: "0px"}}/>    
            </div>
            <button>작성하기</button>
        </div>
    );
}

export default Main;