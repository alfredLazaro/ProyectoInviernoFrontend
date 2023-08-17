import React from "react";
import Popup from "reactjs-popup";

// eslint-disable-next-line react/prop-types
export default function PopupUseGeneral({ message, buttons }) {
  return (
    <div>
      <h4>Popup - GeeksforGeeks</h4>
      <Popup trigger={<button> Click to open modal </button>} modal nested>
        {(close) => (
          <div className="modal">
            <div className="content">{message}</div>
            <div>
              <button onClick={() => close()}>Close modal</button>
              {buttons}
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}
