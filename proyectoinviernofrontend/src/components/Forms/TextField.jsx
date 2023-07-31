import React from "react";
import "./Forms.css";

// eslint-disable-next-line react/prop-types
export default function TextField({ fieldName, inputName, placeholder, alert }) {
    return (
        <div className="mb-2 mt-2">
            <label className="form-label">{fieldName}:</label>
            <input type="text" className="form-control" name={inputName} placeholder={placeholder} />
            <div className="alertForm">
                <span className="alertForm">{alert}</span>
            </div>
        </div>
    )
}