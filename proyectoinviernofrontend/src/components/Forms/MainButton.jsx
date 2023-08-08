import React from "react";
import "./Forms.css";

// eslint-disable-next-line react/prop-types
export default function MainButton({ text, onClick }) {
    return(
        <button className="mainButton" onClick={onClick}>{text}</button>
    );
}