import React from "react";
// eslint-disable-next-line react/prop-types
export default function TimeField({fieldName, inputName}) {
    return (
        <div className="mb-2 mt-2">
            <label className="form-label">{fieldName}:</label>
            <input type="time" className="form-control" name={inputName}/>
        </div>
    )
}