import NavBar from "../../components/NavBar";
import "./FormAlojamiento.css";
import React, { useState } from "react";
import TextField from "../../components/Forms/TextField";
import TextArea from "../../components/Forms/TextArea";
import TimeField from "../../components/Forms/TimeField";
import axios from "axios";


function FormAlojamiento() {

    const [files, setFiles] = useState([]);

    function loadImages(e) {
        const loadedFiles = Array.from(e.target.files);
        setFiles(loadedFiles);

        console.log(loadedFiles);
    }
    
    async function handleSubmit(e) {
        e.preventDefault();

        const form = e.target;
        /* Mostrado en consola de todos los campos de form
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);*/

        let housingData = {
            responsiblePerson: {
                id: 1
            },
            description: form.description.value,
            openingTime: form.timeIn.value + ":00",
            closing_time: form.timeOut.value + ":00",
            name: form.name.value,
            price_accommodation: 150,
            reservationPercentage: 25,
            detailsAccomodation: form.details.value
        }

        console.log(housingData)

        // Llamada a API para registro
        try {
            await axios.post("http://localhost:8080/inf/alojamiento", housingData);
            alert("Registro correcto");
        } catch (error) {
            console.log(error);
        }
    }

    function cancelForm(e) {
        e.preventDefault();
        console.log("Cancelar")
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
                            <TextField fieldName={"Nombre de Alojamiento"} inputName={"name"} />
                            <TextField fieldName={"Nombre de la Ubicación"} inputName={"locationName"} />
                            <TextArea fieldName={"Descripcion del Alojamiento"} inputName={"description"} />
                            <TextField fieldName={"Detalles del Alojamiento"} inputName={"details"} />
                        </div>
                        <div className="col m-3">
                            <TextField fieldName={"Ubicacion en mapa"} inputName={"locationMap"} />
                            <div className="row">
                                <div className="col">
                                    <TimeField fieldName={"Hora entrada"} inputName={"timeIn"} />
                                </div>
                                <div className="col">
                                    <TimeField fieldName={"Hora salida"} inputName={"timeOut"} />
                                </div>
                            </div>
                            <div className="mb-2 mt-2">
                                <label className="form-label">Imágenes del Alojamiento:</label>
                                <input type="file" multiple  onChange={loadImages}/>
                            </div>
                            <button className="btn btn-primary" onClick={cancelForm}>Subir Imagen</button>
                            <section className="imageSection">
                                <ul>
                                    {files.map(file => { return(<li key={file.name}>{file.name}</li>)})}
                                </ul>
                            </section>
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-primary">Completar Registro</button>
                        <button className="btn btn-primary" onClick={cancelForm}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormAlojamiento;