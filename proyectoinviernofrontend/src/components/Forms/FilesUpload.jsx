import React from "react";
import "./Forms.css";

// eslint-disable-next-line react/prop-types
export default function FilesUpload({ name, onChange, alert }) {
    return (
        <div className="mb-2 mt-2">
            <label className="form-label labelText">{name}:</label>
            
            <div className="centerText">
                <input type="file" multiple onChange={onChange} className="inputFile" />
                <br />
                <span className="alertText">{alert}</span>
            </div>
        </div>
    )
}