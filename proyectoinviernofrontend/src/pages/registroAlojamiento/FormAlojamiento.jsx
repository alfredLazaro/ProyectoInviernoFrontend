import NavBar from "../../components/NavBar";
import "./FormAlojamiento.css";
import React, { useState } from "react";
import TextField from "../../components/Forms/TextField";
import TextArea from "../../components/Forms/TextArea";
import TimeField from "../../components/Forms/TimeField";
import NumberField from "../../components/Forms/NumberField";
import axios from "axios";


function FormAlojamiento() {

    // Archivos de imagen
    const [files, setFiles] = useState([]);

    // Manejo de errores
    const [nameAlert, setNameAlert] = useState("")

    const BACK_URL = "http://localhost:8080/"

    const responsibleId = 1

    function loadImages(e) {
        const loadedFiles = Array.from(e.target.files);
        setFiles(loadedFiles);

        console.log(loadedFiles);
    }
    
    async function handleSubmit(e) {
        e.preventDefault();

        const form = e.target;
        if(!validateData(form)){
            return; //Sale de función
        }

        let housingData = {
            responsiblePerson: {
                id: responsibleId
            },
            description: form.description.value,
            openingTime: form.timeIn.value + ":00",
            closing_time: form.timeOut.value + ":00",
            name: form.name.value,
            price_accommodation: form.price.value,
            reservationPercentage: form.prepay.value,
            detailsAccommodation: form.details.value
        }

        // Llamada a API para registro
        try {
            let API_URL = BACK_URL+"inf/alojamiento";
            await axios.post(API_URL, housingData)
            .then((response) => {
                uploadImages(response.data.idEstablishment)
            });
        } catch (error) {
            console.log(error);
        }
    }

    function validateData(form){
        //Validar nombre
        if(form.name.value === ""){
            setNameAlert("Campo no puede estar vacio")
            return false;
        }else{
            setNameAlert("")
        }
        return true;
    }

    function cancelForm(e) {
        e.preventDefault()
        console.log("Cancelar")
    }

    async function uploadImages(idEstablishment) {
        const imageData = new FormData()
        for (const key of Object.keys(files)) {
            imageData.append('images', files[key]);
        }
        imageData.append('id_establishment', idEstablishment)
        try {
            let API_URL = BACK_URL+"image/fileSystem";
            await axios.post(API_URL, imageData)
            .then((response) => {
                console.log(response.data)
            })
        } catch (error) {
            console.log(error);
        }
    }


    return (
        
        <div>
            <NavBar />
            <div className="formContainer">
                <h1>Registro de nuevo alojamiento</h1>
                <form className="formPlace" onSubmit={handleSubmit}>
                    <h2>Formulario de Registro de Datos</h2>
                    <div className="row">
                        <div className="col m-3">
                            <TextField fieldName={"Nombre de Alojamiento"} inputName={"name"} placeholder={"Descripcion corta del Alojamiento"} alert={nameAlert} maxLength={30}/>
                            <TextField fieldName={"Nombre de la Ubicación"} inputName={"locationName"} placeholder={"Ciudad - País u otros datos de Alojamiento"} maxLength={30}/>
                            <TextField fieldName={"Detalles del Alojamiento"} inputName={"details"} placeholder={"Cantidad habitaciones, Baños, Huéspedes máximos permitidos"} maxLength={50}/>
                            <TextArea fieldName={"Descripcion del Alojamiento"} inputName={"description"} maxLength={150}/>
                        </div>
                        <div className="col m-3">
                            <TextField fieldName={"Ubicacion en mapa"} inputName={"locationMap"} placeholder={"Enlace de la ubicación"}/>
                            <div className="row">
                                <div className="col">
                                    <TimeField fieldName={"Hora entrada"} inputName={"timeIn"} />
                                </div>
                                <div className="col">
                                    <TimeField fieldName={"Hora salida"} inputName={"timeOut"} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <NumberField fieldName={"Precio de alojamiento($)"} inputName={"price"}/>
                                </div>
                                <div className="col">
                                    <NumberField fieldName={"Porcentaje de reserva(%)"} inputName={"prepay"}/>
                                </div>
                            </div>
                            <div className="mb-2 mt-2">
                                <label className="form-label">Imágenes del Alojamiento:</label>
                                <input type="file" multiple  onChange={loadImages} className="form-control"/>
                            </div>
                            <section className="imageSection">
                                <ul>
                                    {files.map(file => { return(<li key={file.name}>{file.name}</li>)})}
                                </ul>
                            </section>
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-primary">Completar Registro</button>
                        <button className="btn" onClick={cancelForm}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormAlojamiento;