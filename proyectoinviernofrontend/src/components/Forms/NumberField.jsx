import React from "react";
import "./Forms.css";

// eslint-disable-next-line react/prop-types
export default function NumberField({ fieldName, inputName, alert }) {
    return (
        <div className="mb-2 mt-2">
            <label className="form-label labelText">{fieldName}:</label>
            <input type="number" className="form-control" name={inputName} />
            <div className="centerText">
                <span className="alertText">{alert}</span>
            </div>
        </div>
    )
}