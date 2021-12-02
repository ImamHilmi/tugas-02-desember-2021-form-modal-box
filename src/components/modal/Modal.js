import React from 'react'
import './Modal.css'
import Card from '../card/Card'

const Modal = (props) => {
    return (
    <>
        <div className="backdrop" onClick={props.onClose}>
            <div className="modalC">
            <Card nama={props.nama} tglLahir={props.tglLahir} alamat={props.alamat} hp={props.hp} jenisKelamin={props.jenisKelamin} agama={props.agama} />
            </div>     
        </div>
            
    </>
    )
}

export default Modal;
