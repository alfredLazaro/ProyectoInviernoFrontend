import React from "react";
import Popup from "reactjs-popup";
import "./Popup.css";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function RejectPopup({ open, setOpen }) {
  const closeModal = () => setOpen(false);
  const navigate = useNavigate();

  function confirmAction() {
    navigate("/");
  }

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
            ¿Está seguro de cancelar el registro?
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
    </div>
  );
}
