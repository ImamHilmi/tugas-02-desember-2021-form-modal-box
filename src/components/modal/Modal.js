import React from 'react'
import './Modal.css'
// import Card from '../card/Card'
import CardList from '../card/CardList';

const Modal = (props) => {

    return (
    <>
        <div className="backdrop" onClick={props.onClose}>
            <div className="modalC">
                <h1>Profile Info</h1>
                {props.data.map((dataList, index) => {return(<CardList nama={dataList.nama} tglLahir={dataList.tglLahir} alamat={dataList.alamat} hp={dataList.hp} jenisKelamin={dataList.jenisKelamin} agama={dataList.agama} />)})} 

                <button onClick={props.onClose1} type="button" className="button" > Reset </button>      

                {/* <h1>Profile Info</h1> */}
                {/* <Card nama={props.nama} tglLahir={props.tglLahir} alamat={props.alamat} hp={props.hp} jenisKelamin={props.jenisKelamin} agama={props.agama} /> */}

            </div>     
        </div>
            
    </>
    )
}

export default Modal;
