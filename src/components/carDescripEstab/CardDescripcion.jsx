/* eslint-disable react/prop-types */
import React from "react";
import "./cardRestStyles.css"
//E:\yo\programas\proyectoinviernofrontend\src\components\carDescripEstab\cardRestStyles.css
function CardDescripcion({descripcion,nombre_ubicacion,hora_entrad,hora_salida}){
    return(
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Descripcion: <span>{descripcion}</span></h5>
                    <h5 className="card-title">Ubicacion: <span>{nombre_ubicacion}</span></h5>
                    <h5 className="card-title">Hora de entrada: <span>{hora_entrad}</span></h5>
                    <h5 className="card-title">Hora de salida: <span>{hora_salida}</span></h5>
                </div>
            </div>
        </>
    );
}
export default CardDescripcion;