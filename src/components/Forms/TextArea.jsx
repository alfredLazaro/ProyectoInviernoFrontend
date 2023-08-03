import React from "react";
import "./Forms.css";

// eslint-disable-next-line react/prop-types
export default function TextArea({fieldName, inputName, alert, maxLength}) {
    return (
        <div className="mb-2 mt-2">
            <label className="form-label">{fieldName}:</label>
            <textarea className="form-control" rows="5" name={inputName} maxLength={maxLength}/>
            <div className="alertForm">
                <span className="alertForm">{alert}</span>
            </div>
        </div>
    )
}