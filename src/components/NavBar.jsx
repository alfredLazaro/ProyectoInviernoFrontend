import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import PopupUseGeneral from "./PopupUseGeneral";

export default function NavBar() {
  function viewListAccommdations() {}

  function viewListRestaurants() {}

  function viewListAccommdations1() {
    alert("una");
    setPopUpView(false);
  }

  function viewListRestaurants1() {
    alert("dos");
    setPopUpView(false);
  }

  let functionsMessages = [
    { func: viewListAccommdations1, message: "hola" },
    { func: viewListRestaurants1, message: "mundo" },
  ];

  const [popUpView, setPopUpView] = useState(false);
  function habilitaPopUp() {
    setPopUpView(true);
  }

  return (
    <>
      <div style={{ backgroundColor: "green", marginBottom: "1em" }}>
        <h1>NavBAr</h1>
        <div>
          <NavLink to="/hotels" exact activeClassName="active">
            <button onClick={viewListAccommdations}>Ver alojamientos</button>
          </NavLink>
          <button onClick={viewListRestaurants}>Ver restaurantes</button>
          <button onClick={habilitaPopUp}> Click</button>
          <PopupUseGeneral
            open={popUpView}
            message={"estamos listos"}
            functions={functionsMessages}
          />
        </div>
      </div>
    </>
  );
}
