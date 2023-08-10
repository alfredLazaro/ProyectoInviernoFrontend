import React from "react";
import "./Forms.css";

// eslint-disable-next-line react/prop-types
export default function OtherButton({ text, onClick }) {
    return(
        <button className="otherButton" onClick={onClick}>{text}</button>
    );
}