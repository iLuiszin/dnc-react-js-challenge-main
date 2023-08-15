import React from 'react'
import './index.scss'

const Modal = ({ message, onCloseModal, item }) => {
    return (
        <div className="modal">
            <div className="modal__content">
                <h1>{message}</h1>
                <p>{item.description}</p>

                <div className="modal__actions">
                    <button className='modal__no-button' onClick={onCloseModal}>Não</button>
                    <button className='modal__yes-button' onClick={onCloseModal}>Sim</button>
                </div>
            </div>
        </div>
    );
};

export default Modal