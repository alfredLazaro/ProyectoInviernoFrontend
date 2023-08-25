/* eslint-disable react/prop-types */
import React from "react";
import "./Forms.css";

export default function TextField({
  fieldName,
  inputName,
  placeholder,
  alert,
  maxLength,
}) {
  return (
    <div className="mb-2 mt-2">
      <label className="form-label labelText">{fieldName}:</label>
      <input
        type="text"
        className="form-control"
        name={inputName}
        placeholder={placeholder}
        maxLength={maxLength}
      />
      <div className="centerText">
        <span className="alertText">{alert}</span>
      </div>
    </div>
  );
}
