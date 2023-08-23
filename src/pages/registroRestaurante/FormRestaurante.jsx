import React, { useState } from 'react';
import "./FormRestaurante.css";
import TextField from '../../components/Forms/TextField';
import TextArea from '../../components/Forms/TextArea';
import TimeField from '../../components/Forms/TimeField';
import NumberField from '../../components/Forms/NumberField';
import FilesUpload from '../../components/Forms/FilesUpload';
import RejectPopup from '../../components/Forms/Popups/RejectPopup';
import ConfirmPopup from '../../components/Forms/Popups/ConfirmPopup';
import MainButton from '../../components/Forms/MainButton';
import OtherButton from '../../components/Forms/OtherButton';
import EstablishmentService from '../../services/EstablishmentService';
import { restaurantValidation } from './RestaurantValidation';


function FormRestaurante() {

    // Archivos de imagen
    const [files, setFiles] = useState([]);

    // Manejo de errores en formulario
    const [nameAlert, setNameAlert] = useState("")
    const [locatNameAlert, setLocatNameAlert] = useState("")
    const [cookingAlert, setCookingAlert] = useState("")
    const [descripAlert, setDescripAlert] = useState("")
    const [priceAlert, setPriceAlert] = useState("")
    const [openingAlert, setOpeningAlert] = useState("")
    const [closingAlert, setClosingAlert] = useState("")
    const [filesAlert, setFilesAlert] = useState("")

    // Manejo Popups
    const [openConfirm, setOpenConfirm] = useState(false);
    const [openCancel, setOpenCancel] = useState(false);

    const responsibleId = 1

    function loadImages(e) {
        const loadedFiles = Array.from(e.target.files);
        setFiles(loadedFiles);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const info = e.target;

        let setters = {
            nameAlert: setNameAlert,
            locatNameAlert: setLocatNameAlert,
            cookingAlert: setCookingAlert,
            descripAlert: setDescripAlert,
            priceAlert: setPriceAlert,
            openingAlert: setOpeningAlert,
            closingAlert: setClosingAlert,
            filesAlert: setFilesAlert
        }

        if (!restaurantValidation(info, setters, files)) {
            return;
        }

        // Datos para API
        let apiData = {
            info: info,
            files: files,
            responsibleId: responsibleId
        }

        EstablishmentService.putData(apiData)
        setOpenConfirm(true)
    }
    
    function cancelForm(e) {
        e.preventDefault()
        setOpenCancel(true)
    }


    return (
        <div className="bodyForm"> 
            <div className="formContainer">
                <h1 className='pageTitle'>Registro nuevo restaurante</h1>
                <form className="formPlace" onSubmit={handleSubmit}>
                    {/* create function  handleSubmit */}
                    <div style={{ textAlign: 'center' }}>
                        <h2 className='formTitle'>Formulario de Registro</h2>
                    </div>
                    <div className='row'>
                        <div className='col m-3'>
                            <TextField fieldName={"Nombre del Restaurante"} inputName={"name"} alert={nameAlert} maxLength={30} />
                            <TextField fieldName={"Nombre de la Ubicación"} inputName={"locationName"} alert={locatNameAlert} maxLength={30} />
                            <TextField fieldName={"Tipo de Comida"} inputName={'cookingKind'} alert={cookingAlert} maxLength={30} />
                            <TextArea fieldName={"Descripción del Restaurante"} inputName={'description'} alert={descripAlert} maxLength={150} />
                        </div>
                        <div className="col m-3">
                            <NumberField fieldName={"Precio de reserva($)"} inputName={"price"} alert={priceAlert} />
                            <div className='row'>
                                <div className='col'>
                                    <TimeField fieldName={"Hora apertura"} inputName={"openingTime"} alert={openingAlert} />
                                </div>
                                <div className='col'>
                                    <TimeField fieldName={"Hora cierre"} inputName={"closingTime"} alert={closingAlert} />
                                </div>
                            </div>
                            <FilesUpload name={"Imágenes del Restaurante"} onChange={loadImages} alert={filesAlert} />

                            <section className='imageSection'>
                                <ul className="listImages">
                                    {files.map(file => { return (<li className="listElement" key={file.name}> {file.name}</li>) })}
                                </ul>
                            </section>
                        </div>

                    </div>
                    <div style={{textAlign: "center"}}>
                        <MainButton text={"Completar Registro"} />
                        <OtherButton text={"Cancelar"} onClick={cancelForm} />
                        {/* cancelForm */}
                    </div>
                </form>
                <ConfirmPopup open={openConfirm} setOpen={setOpenConfirm} successActions={[EstablishmentService.registerRestaurant, EstablishmentService.uploadImages]} />
                <RejectPopup open={openCancel} setOpen={setOpenCancel} />
            </div>
        </div>
    )
}

export default FormRestaurante