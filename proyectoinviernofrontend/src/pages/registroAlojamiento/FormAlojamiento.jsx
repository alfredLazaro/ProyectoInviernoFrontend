import NavBar from "../../components/NavBar";
import "./FormAlojamiento.css";
import React from "react";
import TextField from "../../components/Forms/TextField";
import TextArea from "../../components/Forms/TextArea";
import TimeField from "../../components/Forms/TimeField";
import axios from "axios";


function FormAlojamiento() {
    async function handleSubmit(e) {
        e.preventDefault();

        const form = e.target;
        /* Mostrado en consola de todos los campos de form
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);*/

        let housingData = {
            encargado: {
                id: 1
            },
            porcentajeReserva: 25,
            precioAlojamiento: 150,
            descripcion: form.description.value,
            horaApertura: form.timeIn.value+":00",
            horaCierre: form.timeOut.value+":00",
            nombre: form.name.value
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
                                <button className="btn btn-primary" onClick={cancelForm}>Subir Imagen</button>
                                <section className="imageSection">
                                    <li>Image 1</li>
                                    <li>Image 1</li>
                                </section>
                            </div>
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