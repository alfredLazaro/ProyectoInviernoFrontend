import React, { useState } from "react";
import Popup from 'reactjs-popup';
import "./Popup.css";

// eslint-disable-next-line react/prop-types
export default function ConfirmPopup({ open, setOpen, successAction }) {
  const closeModal = () => setOpen(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const closeModalSuccess = () => setOpenSuccess(false);

  function confirmAction() {
    successAction();
    closeModal();
    setOpenSuccess(true);
  }

  function exitForm() {
    closeModalSuccess();
    location.reload();
  }

  const SuccessPopup = () => {
    return (
      <div>
        <Popup open={openSuccess} closeOnDocumentClick onClose={closeModalSuccess}>
          <div>
            <label className="modalMessage">Registro exitoso</label>
            <div style={{ textAlign: "center" }}>
              <button className="yesButton" onClick={exitForm}>OK</button>
            </div>
          </div>
        </Popup>
      </div>
    );
  };

  return (
    <div>
      <Popup open={open} closeOnDocumentClick onClose={closeModal} className="modalBackground">
        <div className="modalContainer">
          <label className="modalMessage">¿Está seguro de finalizar el registro?</label>
          <div style={{ textAlign: "center" }}>
            <button className="yesButton" onClick={confirmAction}> Si </button>
            <button className="close noButton" onClick={closeModal}> No </button>
          </div>
        </div>
      </Popup>
      <SuccessPopup />
    </div>
  );
}