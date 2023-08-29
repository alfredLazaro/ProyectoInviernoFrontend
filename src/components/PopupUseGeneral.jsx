import React from "react";
import Popup from "reactjs-popup";
import ButtonGeneral from "./ButtonGeneral";

// eslint-disable-next-line react/prop-types
export default function PopupUseGeneral({ open, message, functions }) {
  //btn btn-secondary
  if (functions == null) {
    +alert("popup sin funciones enviadas");
  }
  // eslint-disable-next-line react/prop-types
  let buttonsView = functions.map((button) => {
    return (
      <>
        <ButtonGeneral
          style={"yesButton"}
          func={button.func}
          message={button.message}
        />
      </>
    );
  });
  return (
    <>
      <Popup closeOnDocumentClick={false} open={open}>
        <div className="modalMessage">
          <label className="modalMessage">{message}</label>
        </div>
        <div style={{ textAlign: "center" }}>{buttonsView}</div>
      </Popup>
    </>
  );
}
