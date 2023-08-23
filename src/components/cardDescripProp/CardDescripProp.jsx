/* eslint-disable react/prop-types */
import React from "react";
import "./cardDescripProp.css";
function CardDescripProp({nombreProp,edadPropietario}){
    return(
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Nombre del propietario: <span>{nombreProp}</span></h5>
                    <h5 className="card-title">Edad del propietario: <span>{edadPropietario}</span></h5>
                </div>
            </div>
        </>
    );
}
export default CardDescripProp;