import React from 'react';
import NavBar from "../../components/NavBar";
import "./FormRestaurante.css";
import TextField from '../../components/Forms/TextField';
import TextArea from '../../components/Forms/TextArea';
import TimeField from '../../components/Forms/TimeField';
import axios from "axios";

function FormRestaurante(){
    
    async function handleSubmit(e){
        e.preventDefault();
        const info = e.target;
        
        
        let data = {
            name: info.name.value,
            locationName: info.locationName.value,
            descripton: info.description.value
        } 

        let url = "http://localhost:8080/restaurant/new"

        axios.post(url, data)
            .then(response => {
                console.log('Respuesta del servidor:', response.data);
            })
            .catch(error => {
                console.error('Error al realizar la solicitud:', error);
             });

        console.log(data);
    }

    return(
        <div>
            <NavBar/>
            <div className="formContainer">
                <h1>Registro nuevo restaurante</h1>
                <form className="formPlace" onSubmit={handleSubmit}>  
                {/* create function  handleSubmit */}
                   <h2>Formulario de registro</h2>
                    <div className='row'>
                        <div className='col m-3'>
                            <TextField fieldName={"Nombre del restaurante"} inputName={"name"}/>
                            <TextField fieldName={"Nombre de la ubicacion"} inputName={"locationName"}/>
                            <TextArea fieldName={'Descripcion del restaurante'} inputName={'description'}/>
                            <TextField fieldName={'Detalles del restaurante'} inputName={'details'}/>
                        </div>
                        <div className="col m-3">
                            <TextField fieldName={"Ubicacion en mapa"} inputName={"locationMap"} />
                            <div className='row'>
                                <div className='col'>
                                    <TimeField fieldName={"Hora de apertura"} inputName={"openingTime"}/>
                                </div>
                                <div className='col'>
                                    <TimeField fieldName={"Hora de cierre"} inputName={"closingTime"}/>
                                </div>
                            </div>
                            <div className='mb-2 mt-2'>
                                <label className='form-label'>Imagenes del restaurante: </label>
                                <input type='file' multiple onChange={null}/>  
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