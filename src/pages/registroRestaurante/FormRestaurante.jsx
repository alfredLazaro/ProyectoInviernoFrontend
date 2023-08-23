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
import AccommodationService from '../registroAlojamiento/AccommodationService';


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

        if (!validateData(info)) {
            return;
        }

        // Datos para API
        let apiData = {
            info: info,
            files: files,
            responsibleId: responsibleId
        }

        AccommodationService.putData(apiData)
        setOpenConfirm(true)
    }
    
    function validateData(info) {
        let validated = true;
        let allAlerts = "";
        let alert = "";

        // Mensajes de error
        let errors = {
            blankAlert: "Este campo no se puede llenar solamente con espacios",
            onlyLettersAlert: "Solo se permiten letras, comas y puntos en este campo",
            emptyAlert: "Este campo no se pude dejar vacío",
            negativeAlert: "Este campo solo permite números positivos",
            closingAlert: "La hora de cierre debe ser posterior a la de apertura",
            formatImagesAlert: "Solo se permiten imágenes con extensión: jpg, png y jpeg",
            maxImagesAlert: "Se supero el limite máximo de 5 imágenes",
            minImagesAlert: "Se debe registrar al menos 2 imágenes"
        }

        //Validar campos de texto
        alert = validateTextInput(info.name.value, errors)
        setNameAlert(alert)
        allAlerts += alert

        alert = validateTextInput(info.locationName.value, errors)
        setLocatNameAlert(alert)
        allAlerts += alert

        alert = validateTextInput(info.cookingKind.value, errors)
        setCookingAlert(alert)
        allAlerts += alert

        alert = validateTextInput(info.description.value, errors)
        setDescripAlert(alert)
        allAlerts += alert

        //Validar precio reserva
        alert = ""
        if (info.price.value === "") {
            alert = errors.emptyAlert
        } else if (parseInt(info.price.value) < 0) {
            alert = errors.negativeAlert
        }
        setPriceAlert(alert)
        allAlerts += alert

        //Validar hora de apertura y cierre
        alert = ""
        if (info.openingTime.value === "") {
            alert = errors.emptyAlert
        }
        setOpeningAlert(alert)
        allAlerts += alert

        alert = ""
        if (info.closingTime.value === "") {
            alert = errors.emptyAlert
        } else if (info.openingTime.value >= info.closingTime.value) {
            alert = errors.closingAlert
        }
        setClosingAlert(alert)
        allAlerts += alert

        // Validar imágenes
        alert = validateImages(files, errors)
        setFilesAlert(alert)
        allAlerts += alert

        if (allAlerts !== "") validated = false;

        return validated;
    }

    function validateTextInput(text, errors) {
        let alert = "";

        let regex = /^[ a-zA-ZáéíóúÁÉÍÓÚñÑ,.\n]+$/
        if (text === "") {
            alert = errors.emptyAlert;
        } else if (text.trim() === "") {
            alert = errors.blankAlert;
        } else if (!regex.test(text.trim())) {
            alert = errors.onlyLettersAlert;
        }

        return alert;
    }

    function validateImages(files, errors) {
        let alert = ""
        if (files.length == 0) {
            alert = errors.emptyAlert
        } else if (files.length < 2) {
            alert = errors.minImagesAlert
        } else if (files.length > 5) {
            alert = errors.maxImagesAlert
        } else {
            const fileExtensionRegex = /\.(jpg|png|jpeg)$/i;
            for (let i = 0; i < files.length && alert === ""; i++) {
                if (!fileExtensionRegex.test(files[i].name)) {
                    alert = errors.formatImagesAlert
                }
            }
        }
        return alert
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
                <ConfirmPopup open={openConfirm} setOpen={setOpenConfirm} successActions={[AccommodationService.registerRestaurant, AccommodationService.uploadImages]} />
                <RejectPopup open={openCancel} setOpen={setOpenCancel} />
            </div>
        </div>
    )
}

export default FormRestaurante