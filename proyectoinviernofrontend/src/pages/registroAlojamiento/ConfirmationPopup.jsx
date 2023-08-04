import React, { useState } from "react";
import Popup from 'reactjs-popup';
import "./Popup.css";

// eslint-disable-next-line react/prop-types
export default function ConfirmationPopup({open, setOpen, successAction}){
    const closeModal = () => setOpen(false);
    const [openSuccess, setOpenSuccess] = useState(false);
    const closeModalSuccess = () => setOpenSuccess(false);

    function confirmAction(){
        successAction();
        closeModal();
        setOpenSuccess(true);
    }

    const SuccessPopup = () => {
        return (
          <div>
            <Popup open={openSuccess} closeOnDocumentClick onClose={closeModalSuccess}>
              <div>
                <label>Registro exitoso</label>
                <button onClick={closeModalSuccess}>OK</button>
              </div>
            </Popup>
          </div>
        );
    };

    return (
      <div>
        <Popup open={open} closeOnDocumentClick onClose={closeModal} className="modalBackground">
          <div >
            <label>¿Está seguro de finalizar el registro?</label>
            <button className="close" onClick={closeModal}> No </button>
            <button onClick={confirmAction}> Si </button>
          </div>
        </Popup>
        <SuccessPopup/>
      </div>
    );
  }