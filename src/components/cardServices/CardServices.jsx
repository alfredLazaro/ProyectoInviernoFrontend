/* eslint-disable react/prop-types */
import React from 'react';
import './cardServis.css';
function CardServis({nombreServicio,precioServicio,tipoComida}){
    return(
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Nombre del servicio: <span>{nombreServicio}</span></h5>
                    <h5 className="card-title">Precio del servicio: <span>{precioServicio}</span></h5>
                    <h5 className="card-title">Tipo de comida: <span>{tipoComida}</span></h5>
                </div>
            </div>
        </>
    );
}
export default CardServis;