import NavBar from "../../components/NavBar";
import "./FormAlojamiento.css";
import React from "react";


function FormAlojamiento() {
    return (
        <div>
            <NavBar />
            <div className="formContainer">
                <h1>Registro de nuevo alojamiento</h1>
                <form className="formPlace">
                    <h2>Formulario de Registro de Datos</h2>
                    <div className="row">
                        <div className="col">
                            <span>Nombre de Alojamiento: </span>
                            <input type="text" />
                            <span>Nombre de la Ubicación:</span>
                            <input type="text" />
                            <span>Descripcion del Alojamiento:</span>
                            <textarea name="" id="" cols="30" rows="5"></textarea>
                            <span>Detalles del Alojamiento:</span>
                            <input type="text" />
                        </div>
                        <div className="col">
                            <span>Ubicacion en mapa: </span>
                            <input type="text" />
                            <div className="row">
                                <div className="col">
                                    <span>Hora entrada:</span>
                                    <input type="time" />
                                </div>
                                <div className="col">
                                    <span>Hora salida:</span>
                                    <input type="time" />
                                </div>
                            </div>
                            <span>Imágenes del Alojamiento:</span>
                            <button>Subir Imagen</button>
                            <section>
                                <li>Image 1</li>
                                <li>Image 1</li>
                            </section>
                        </div>
                    </div>
                    <div className="row">
                        <button>Completar Registro</button>
                        <button>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormAlojamiento;