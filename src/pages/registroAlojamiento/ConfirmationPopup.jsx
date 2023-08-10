import React, { useState } from "react";
import Popup from 'reactjs-popup';
import "./Popup.css";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function ConfirmationPopup({ open, setOpen, successAction }) {
  const closeModal = () => setOpen(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const closeModalSuccess = () => setOpenSuccess(false);

  const navigate = useNavigate();

  function confirmAction() {
    successAction();
    closeModal();
    setOpenSuccess(true);
  }

  function exitForm(){
    closeModalSuccess();
    navigate("/");
  }

  const SuccessPopup = () => {
    return (
      <div>
        <Popup open={openSuccess} closeOnDocumentClick onClose={closeModalSuccess}>
          <div>
            <label className="modalMessage">Registro exitoso</label>
            <div style={{textAlign: "center"}}>
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
          <div style={{textAlign: "center"}}>
            <button className="close noButton" onClick={closeModal}> No </button>
            <button className="yesButton" onClick={confirmAction}> Si </button>
          </div>
        </div>
      </Popup>
      <SuccessPopup />
    </div>
  );
}