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
<<<<<<< HEAD:src/components/Forms/Popups/ConfirmPopup.jsx
        <Popup open={openSuccess} closeOnDocumentClick onClose={exitForm}>
          <div style={{ textAlign: "center" }}>
            <label className="modalMessage">Registro exitoso</label>
            <div>
=======
        <Popup
          open={openSuccess}
          closeOnDocumentClick
          onClose={closeModalSuccess}
        >
          <div>
            <label className="modalMessage">Registro exitoso</label>
            <div style={{ textAlign: "center" }}>
>>>>>>> origin/US-3Pruebas:src/pages/registroAlojamiento/ConfirmationPopup.jsx
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
<<<<<<< HEAD:src/components/Forms/Popups/ConfirmPopup.jsx
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
=======
        <div className="modalContainer">
          <label className="modalMessage">
            ¿Está seguro de finalizar el registro?
          </label>
          <div style={{ textAlign: "center" }}>
            <button className="yesButton" onClick={confirmAction}>
              {" "}
              Si{" "}
            </button>
            <button className="close noButton" onClick={closeModal}>
              {" "}
              No{" "}
>>>>>>> origin/US-3Pruebas:src/pages/registroAlojamiento/ConfirmationPopup.jsx
            </button>
          </div>
        </div>
      </Popup>
      <SuccessPopup />
    </div>
  );
}
