import React from 'react'
import Image from '../../content/pic1.png';
import './Card.css';

const CardList = (props) => {
    return (
    <>
        <div>
            <div className="row__cardname">  
                <div className="col-md-12">
                    <div className="name__card">
                    <div className="profile__main">
                        {/* <img className="profile__img" src={props.foto} alt="Foto" /> */}
                        <img className="profile__img" src={Image} alt="Foto" />
                        <p className="profile__name"> {props.nama} </p>
                    </div>
                        <div className="profile__main">
                        <p className="profile__body"> Nomor HP : {props.hp}</p>
                        <p className="profile__body"> Alamat : {props.alamat}</p>
                        <p className="profile__body">Tanggal Lahir : {props.tglLahir}</p>
                        <p className="profile__body">Jenis Kelamin : {props.jenisKelamin}</p>
                        <p className="profile__body">agama : {props.agama}</p>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    </>
    )
}

export default CardList
