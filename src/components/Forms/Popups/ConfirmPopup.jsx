import React, { useState } from "react";
import Popup from "reactjs-popup";
import "./Popup.css";

// eslint-disable-next-line react/prop-types
export default function ConfirmPopup({ open, setOpen, successActions }) {
  const closeModal = () => setOpen(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const closeModalSuccess = () => setOpenSuccess(false);

  async function confirmAction() {
    await successActions[0](); // Registro de establecimiento
    await successActions[1](); // Registro de imagenes
    closeModal();
    setOpenSuccess(true);
  }

  function exitForm() {
    closeModalSuccess();
    window.location.href = "/recordlocation";
  }

  const SuccessPopup = () => {
    return (
      <div>
        <Popup open={openSuccess} closeOnDocumentClick onClose={exitForm}>
          <div style={{ textAlign: "center" }}>
            <label className="modalMessage">Registro exitoso</label>
            <div>
              <button className="yesButton" onClick={exitForm}>
                OK
              </button>
            </div>
          </div>
        </Popup>
      </div>
    );
  };

  return (
    <div>
      <Popup
        open={open}
        closeOnDocumentClick
        onClose={closeModal}
        className="modalBackground"
      >
        <div style={{ textAlign: "center" }}>
          <label className="modalMessage">
            ¿Está seguro de finalizar el registro?
          </label>
          <div>
            <button className="yesButton" onClick={confirmAction}>
              Si
            </button>
            <button className="close noButton" onClick={closeModal}>
              No
            </button>
          </div>
        </div>
      </Popup>
      <SuccessPopup />
    </div>
  );
}
