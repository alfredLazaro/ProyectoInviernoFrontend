import { NavLink } from "react-router-dom";
import React from "react";
import PopupUseGeneral from "./PopupUseGeneral";

export default function NavBar() {
  function viewListAccommdations() {
    alert("una");
  }

  function viewListRestaurants() {
    alert("dos");
  }

  let functionsMessages = [
    { func: viewListAccommdations, message: "hola" },
    { func: viewListRestaurants, message: "mundo" },
  ];

  return (
    <>
      <div style={{ backgroundColor: "green", marginBottom: "1em" }}>
        <h1>NavBAr</h1>
        <div>
          <NavLink to="/hotels" exact activeClassName="active">
            <button onClick={viewListAccommdations}>Ver alojamientos</button>
          </NavLink>

          <button onClick={viewListRestaurants}>Ver restaurantes</button>
          <PopupUseGeneral
            message={"estamos listos"}
            functions={functionsMessages}
          />
        </div>
      </div>
    </>
  );
}
