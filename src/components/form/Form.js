// import './form.css'
import { useState } from "react";
import Modal from '../modal/Modal';
// import CardList from '../card/CardList';

function Form() {
    const [nama, setNama] = useState("");
    const [tglLahir, setTglLahir] = useState("");
    const [alamat, setAlamat] = useState("");
    const [hp, setHp] = useState("");
    const [jenisKelamin, setJenisKelamin] = useState("");
    const [agama, setAgama] = useState("");
    const [isShow, setIsShow] = useState(false);
    const [data, setData] = useState([]);
    // const [foto, setFoto] = useState('');

    const resetHandler = () => {
        setData([]);
        setIsShow(false);
    }
    // const fotoHandler = (event) => {
    //     let src = setFoto(URL.createObjectURL(event.target.files[0]));
    //     setData(foto => ({...foto, name: src}));
    //     console.log(event.target.name);
    // }
    function nameHandler(event) {
        setNama(event.target.value);
        console.log(event.target.name);
    }
    function tglLahirHandler(event) {
        setTglLahir(event.target.value);
        console.log(event.target.name);
    }
    function alamatHandler(event) {
        setAlamat(event.target.value);
        console.log(event.target.name);
    }
    function hpHandler(event) {
        setHp(event.target.value);
        console.log(event.target.name);
    }
    function jenisKelaminHandler(event) {
        setJenisKelamin(event.target.value);
        console.log(event.target.name);
    }
    function agamaHandler(event) {
        setAgama(event.target.value);
        console.log(event.target.name);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        setIsShow(true);
        // setData([...data, {"key": data.length + 1,nama,tglLahir,alamat,hp,jenisKelamin,agama,foto}]);
        setData([...data, {"key": data.length + 1,nama,tglLahir,alamat,hp,jenisKelamin,agama}]);
        console.log(data);
    }
    const closeHandler = () => {
        setIsShow(false)
    }
    
    return ( <>
      
        {/* {isShow && <Modal onClose={closeHandler} data={data} nama={nama} tglLahir={tglLahir} alamat={alamat} hp={hp} jenisKelamin={jenisKelamin} agama={agama} foto={foto} onClose1={resetHandler} />} */}
        {isShow && <Modal onClose={closeHandler} data={data} nama={nama} tglLahir={tglLahir} alamat={alamat} hp={hp} jenisKelamin={jenisKelamin} agama={agama} onClose1={resetHandler} />}
        
        <div className="row">
            <div className="col-md-12">
                <div className="card card-primary">
                    <div className="card-header">
                        <h3 className="card-title">Form Data</h3>
                    </div>

                 <div className="card-body"></div>

                    <form id ="form" className="inputan" onSubmit={submitHandler}>
                        <label htmlFor="nama">Nama : </label><br />
                        <input onChange={nameHandler} value={nama} type="text" id="nama" className="input1" name="nama" placeholder="Masukkan Nama Kalian . . ." /><br />

                        <label htmlFor="tanggallahir">Tanggal Lahir : </label><br />
                        <input onChange={tglLahirHandler} value={tglLahir} type="date" id="tanggal" name="tanggallahir" /><br />

                        <label htmlFor="alamat">Alamat : </label><br />
                        <input onChange={alamatHandler} value={alamat} type="textarea" id="alamat" name="alamat" placeholder="Masukkan Alamat Kalian . . ." /><br />
                        
                        <label htmlFor="hp">Nomor HP : </label><br />
                        <input onChange={hpHandler} value={hp} type="Number" id="hp" name="hp" placeholder="Masukkan Nomor HP Kalian . . ." /><br />

                        <div id="kelamin">
                            <p>Pilih jenis Kelamin :</p>
                                <input onChange={jenisKelaminHandler} type="radio" id="laki" name="jenisKelamin" value="Laki - Laki" checked={jenisKelamin==='Laki - Laki'} />
                                <label htmlFor="laki">Laki - Laki</label>
                                <input onChange={jenisKelaminHandler} type="radio" id="perempuan" name="jenisKelamin" value="Perempuan" checked={jenisKelamin==='Perempuan'} />
                                <label htmlFor="perempuan">Perempuan</label><br />
                        </div>
                        <label htmlFor="agama">Agama : </label><br />
                        <select onChange={agamaHandler} value={agama} name="agama" id="agama">
                            <option value="pilih">Pilih Salah Satu</option>
                            <option value="islam">Islam</option>
                            <option value="katolik">Katolik</option>
                            <option value="protestan">Protestan</option>
                            <option value="hindu">Hindu</option>
                            <option value="budha">Budha</option>
                        </select><br />

                        {/* <input type='file' name='foto' onChange={fotoHandler} /> */}

                        <input type="checkbox" id="setuju" name="setuju" value="setuju" />
                        <label htmlFor="setuju"> Apakah data tersebut sudah benar ?</label><br />

                            <button id="button" type="submit" className="button">
                                Preview
                            </button>

                    </form>
                </div>
            </div>
        </div>
    </>)
};

export default Form;