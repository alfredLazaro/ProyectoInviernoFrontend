import React from "react";
import { Link } from "react-router-dom";


function PrincipalHotel() {
  return (
    <>
      <div>
        <h1>hotel</h1>
        <Link to="/hotelinformation">
          Haz clic para ver la página sobre nosotros
        </Link>
        <Link to="contacto">Haz clic para ver la página de contacto</Link>
      </div>
    </>
  );
}

export default PrincipalHotel;
