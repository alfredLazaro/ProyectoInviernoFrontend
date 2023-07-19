import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
// eslint-disable-next-line react/prop-types
export default function CarruselVistaInf({ imagenes }) {
  let num = 0;
  console.log(imagenes);
  const imgs = () => {
    // eslint-disable-next-line react/prop-types
    return imagenes.map((name) => (
      <>
        <MDBCarouselItem
          key={num}
          className="w-100 d-block"
          itemId={num++}
          src={name}
          width={"500"}
          height={"300"}
        />        
      </>
    ));
  };

  return (
    <>
      <div>
        <MDBCarousel showControls showIndicators>
          {imgs()}
        </MDBCarousel>
      </div>
    </>
  );
}
