import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
// eslint-disable-next-line react/prop-types
export default function ViewCarouselHotel({ imagenes,ancho, largo }) {
  let num = 0;  
  const imgs = () => {
    // eslint-disable-next-line react/prop-types
    return imagenes.map((name) => (
      <MDBCarouselItem
        key={num++}
        className="w-100 d-block"
        itemId={num++}
        src={name}
        width={ancho}
        height={largo}
        style={{ padding: "1em" }}
      />
    ));
  };
  return (
    <>
      <div>
        <MDBCarousel showControls>{imgs()}</MDBCarousel>
      </div>
    </>
  );
}
