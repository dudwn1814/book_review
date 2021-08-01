import React from 'react';
import './Modal.css';

const ModalBtn = (props) => {
  const { visible, onOk, header } = props;
  
  return (
    <div className={ visible ? 'openModal modal' : 'modal' }>
            { visible ? (  
                <section>
                    <header>
                        {header}
                        <button className="close" onClick={onOk}> &times; </button>
                    </header>
                    <main>
                        {props.children}
                    </main>
                </section>
            ) : null }
        </div>
  );
};

export default ModalBtn;
