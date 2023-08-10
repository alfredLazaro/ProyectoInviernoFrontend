import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// eslint-disable-next-line react/prop-types
export default function ViewCarouselHotel({ imagenes, ancho, largo }) {
  imagenes = imagenes.map((URL, index) => (
    <div className="slide" key={index}>
      <img
        alt="sample_file"
        src={URL}
        key={index}
        width={ancho}
        height={largo}
      />
    </div>
  ));
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
