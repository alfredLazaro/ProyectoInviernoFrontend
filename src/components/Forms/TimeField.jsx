import React from "react";
<<<<<<< HEAD
// eslint-disable-next-line react/prop-types
export default function TimeField({fieldName, inputName}) {
    return (
        <div className="mb-2 mt-2">
            <label className="form-label">{fieldName}:</label>
            <input type="time" className="form-control" name={inputName}/>
=======
import "./Forms.css";

// eslint-disable-next-line react/prop-types
export default function TimeField({fieldName, inputName, alert}) {
    return (
        <div className="mb-2 mt-2">
            <label className="form-label labelText">{fieldName}:</label>
            <input type="time" className="form-control" name={inputName}/>
            <div className="centerText">
                <span className="alertText">{alert}</span>
            </div>
>>>>>>> historia-5
        </div>
    )
}