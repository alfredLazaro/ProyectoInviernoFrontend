import React from "react";
import { MDBCarousel, MDBCarouselItem, MDBContainer,MDBCardImage } from "mdb-react-ui-kit";
// eslint-disable-next-line react/prop-types
export default function ViewCarouselHotel({ imagenes, ancho, largo }) {
  let num = 0;
  //let idItem=0
  const imgs = () => {
    // eslint-disable-next-line react/prop-types
    return imagenes.map((name) => (
      <MDBCarouselItem
        key={num++}
        className="w-100 d-block "
        itemId={num++}      
        width={ancho}
        height={largo}
        style={{ padding: "1em" }}
      >
        <MDBCardImage
          src={name}
          alt="Imagen del establecimiento"
        />
      </MDBCarouselItem>
    ));
  };
  return (
    <>
      <div>
        <MDBContainer className="mt-5">
          <MDBCarousel showControls>{imgs()}</MDBCarousel>{" "}
        </MDBContainer>
      </div>
    </>
  );
}
