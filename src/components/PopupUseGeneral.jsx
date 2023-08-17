import React from "react";
import Popup from "reactjs-popup";
import ButtonGeneral from "./ButtonGeneral";

// eslint-disable-next-line react/prop-types
export default function PopupUseGeneral({ message, functions }) {
  //btn btn-secondary
  // eslint-disable-next-line react/prop-types
  let buttonsView = functions.map((button) => {
    return (
      <>
        <ButtonGeneral
          style={"mainButton"}
          func={button.func}
          message={button.message}
        />
      </>
    );
  });
  return (
    <>
      <Popup trigger={<button> Click </button>} modal nested>
        <div className="modalMessage">
          <label className="modalMessage">{message}</label>
        </div>
        <div style={{ textAlign: "center" }}>{buttonsView}</div>
      </Popup>
    </>
  );
}
