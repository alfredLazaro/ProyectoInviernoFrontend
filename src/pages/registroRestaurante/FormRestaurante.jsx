import React from 'react';
import "./FormRestaurante.css";
import TextField from '../../components/Forms/TextField';
import TextArea from '../../components/Forms/TextArea';
import TimeField from '../../components/Forms/TimeField';
import NumberField from '../../components/Forms/NumberField';
import axios from "axios";

function FormRestaurante() {

    const responsibleId = 1

    async function handleSubmit(e) {
        e.preventDefault();
        const info = e.target;

        let restaurantData = {
            responsiblePerson: {
                id: responsibleId
            },
            name: info.name.value,
            locationName: info.locationName.value,
            descripton: info.description.value,
            openingTime: info.openingTime.value + ":00",
            closing_time: info.closingTime.value + ":00",
            cookingKind: info.cookingKind.value,
            priceRestaurant: info.price.value
        }

        let url = "http://localhost:8080/restaurant"

        axios.post(url, restaurantData)
            .then(response => {
                console.log('Respuesta del servidor:', response.data);
            })
            .catch(error => {
                console.error('Error al realizar la solicitud:', error);
            });
    }

    return (
        <div>
            <div className="formContainer">
                <h1>Registro nuevo restaurante</h1>
                <form className="formPlace" onSubmit={handleSubmit}>
                    {/* create function  handleSubmit */}
                    <h2>Formulario de registro</h2>
                    <div className='row'>
                        <div className='col m-3'>
                            <TextField fieldName={"Nombre del Restaurante"} inputName={"name"} />
                            <TextField fieldName={"Nombre de la Ubicación"} inputName={"locationName"} />
                            <TextField fieldName={"Tipo de Comida"} inputName={'cookingKind'} />
                            <TextArea fieldName={"Descripción del Restaurante"} inputName={'description'} />
                        </div>
                        <div className="col m-3">
                            <NumberField fieldName={"Precio de reserva($)"} inputName={"price"} />
                            <div className='row'>
                                <div className='col'>
                                    <TimeField fieldName={"Hora apertura"} inputName={"openingTime"} />
                                </div>
                                <div className='col'>
                                    <TimeField fieldName={"Hora cierre"} inputName={"closingTime"} />
                                </div>
                            </div>
                            <div className='mb-2 mt-2'>
                                <label className='form-label'>Imagenes del restaurante: </label>
                                <input type='file' multiple onChange={null} />
                                {/* create function loadImages */}
                            </div>
                            <button className='btn btn-primary' onClick={null}>Subir Imagen</button>
                            <section className='imageSection'>
                                <ul>
                                    {/* {File.map(file => {return (<li key={file.name}> {file.name}</li>)})} */}
                                </ul>
                            </section>
                        </div>

                    </div>
                    <div className='center'>
                        <button className='btn btn-primary'>Completar registro</button>
                        <button className='btn btn-primary' onClick={null}>Cancelar</button>
                        {/* cancelForm */}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormRestaurante