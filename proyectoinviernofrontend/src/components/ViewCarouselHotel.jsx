import React from "react";
//import { MDBCarousel, MDBCarouselItem, MDBContainer,MDBCardImage } from "mdb-react-ui-kit";
import { Carousel } from "react-carousel-minimal";
// eslint-disable-next-line react/prop-types
export default function ViewCarouselHotel({ imagenes, ancho, largo }) {
  // eslint-disable-next-line react/prop-types
  const imgs = imagenes.map((name) => ({
    image: name,
    caption: "",
  }));

  const captionStyle = {
    fontSize: ancho,
    fontWeight: largo,
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <>
      <div>
        <Carousel
          data={imgs}
          time={5000}
          width="850px"
          height="200px"
          captionStyle={captionStyle}
          radius="10px"
          slideNumber={true}
          slideNumberStyle={slideNumberStyle}
          captionPosition="bottom"
          automatic={false}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          thumbnails={true}
          thumbnailWidth="100px"
          style={{
            textAlign: "center",
            maxWidth: "850px",
            maxHeight: "500px",
            margin: "40px auto",
          }}
        />
      </div>
    </>
  );
}
