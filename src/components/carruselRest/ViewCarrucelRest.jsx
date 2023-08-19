/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// eslint-disable-next-line react/prop-types
export default function ViewCarouselHotel({ imagenes, ancho, largo }) {
  const [imageData, setImageData] = useState(null);
  imagenes = imagenes.map((id, index) => {
        const getImageFromServer = async () => {
          try {
                const response = await axios.get(`http://localhost:8080/image/fileSystem/${id}`, {
                    responseType: 'arraybuffer', // Indica que la respuesta es un array de bytes
                });
                // Convertir el array de bytes en un Blob
                const blob = new Blob([response.data], { type: 'image/png' });
                // Convertir el Blob en una URL
                const imageUrl = URL.createObjectURL(blob);
                // Guardar la URL en el estado
                setImageData(imageUrl);
                // Guardar la URL en localStorage
                localStorage.setItem('imageData', imageUrl);
          } catch (error) {
              console.error('no se cargo la imagen', error);
          }
      };
      useEffect(() => {
        getImageFromServer(); // Llamamos a la función para obtener la imagen cuando el componente se monta
      }, []);
        return (
          <div className="slide" key={index}>
            <img
              alt="sample_file"
              src={imageData} 
              key={index}
              width={ancho}
              height={largo}
            />
          </div>
        );
  });
  return (
    <>
      <div>
        <div className="box">
          <Carousel  timer={2000} useKeyboardArrows={true} >{imagenes}</Carousel>
        </div>
      </div>
    </>
  );
}
