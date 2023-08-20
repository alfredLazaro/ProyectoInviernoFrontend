/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import imageDefecto from "../imagenDefecto.png"
// eslint-disable-next-line react/prop-types
export default function ViewCarouselHotel({ imagenes, ancho, largo }) {
  const [imageDataArray, setImageDataArray] = useState([]);

  useEffect(() => {
    const getImageFromServer = async (id, index) => {
      try {
        const response = await axios.get(`http://localhost:8080/image/fileSystem/${id}`, {
          responseType: 'arraybuffer',
        });

        const blob = new Blob([response.data], { type: 'image/png' });
        const imageUrl = URL.createObjectURL(blob);

        // Actualizamos el arreglo de estados con la URL de imagen
        setImageDataArray(prevArray => {
          const newArray = [...prevArray];
          newArray[index] = imageUrl;
          return newArray;
        });
      } catch (error) {
        console.error('No se cargó la imagen', error);
      }
    };

    imagenes.forEach((id, index) => {
      getImageFromServer(id, index);
    });
  }, [imagenes]);

  return (
    <div>
      <div className="box">
        <Carousel timer={2000} useKeyboardArrows={true}>
          {imageDataArray.map((imageUrl, index) => (
            <div className="slide" key={index}>
              {imageUrl ? (
                <img
                  alt="sample_file"
                  src={imageUrl}
                  width={ancho}
                  height={largo}
                  style={{ objectFit: "cover" }}
                />
              ) : (
                <p>Cargando imagen...</p>
              )}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

