/* eslint-disable no-unused-vars */
import { Axios } from "axios";
import React from "react";
/* import { useEffect } from "react"; */
/* import { Carousel } from "react-responsive-carousel"; */
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// eslint-disable-next-line react/prop-types
export default function ViewCarouselHotel({ imagenes, ancho, largo }) {
  //var ruta="http://localhost:8080/restaurant/";
/*   const [idImg, setIdImg] = React.useState(null); */
  
    function imageDisplay() {
        const [imageData, setImageData] = useState(null);
        //const idImg=6;
        const getImageFromServer = async () => {
            try {
              
                  const response = await Axios.get('http://localhost:8080/image/fileSystem/6', {
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

        return (
            <div>
                <button onClick={getImageFromServer}>Obtener Imagen</button>
                {imageData && <img src={imageData} alt="Image" />}
            </div>
        );
    }
  // eslint-disable-next-line react/prop-types
  /* imagenes = imagenes.map((URL, index) => (
    <div className="slide" key={index}>
      <img
        alt="sample_file"
        src={URL}
        key={index}
        width={ancho}
        height={largo}
      />
    </div>
  )); */
  /* // eslint-disable-next-line react/prop-types
  imagenes = imagenes.map((URL, index) => {
    let fixedURL = URL.replace(/\\/g, "/");
    
    return (
      <div className="slide" key={index}>
        <img
          alt="sample_file"
          src={fixedURL} 
          key={index}
          width={ancho}
          height={largo}
        />
       <p>{fixedURL}</p>
      </div>
    );
  }); */
  
  return (
    <>
      <div>
        <div className="box">
          {/* <Carousel  timer={2000} useKeyboardArrows={true} >{imagenes}</Carousel> */}
          {imageDisplay()}
        </div>
      </div>
    </>
  );
}
