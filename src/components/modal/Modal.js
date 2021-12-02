import React from 'react'
import './Modal.css'
import Card from '../card/Card'

const Modal = (props) => {
    return (
    <>
        <div className="backdrop" onClick={props.onClose}>
            <div className="modalC">
                <Card />
            </div>     
        </div>
            
    </>
    )
}

export default Modal;
