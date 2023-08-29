import React from "react";
// eslint-disable-next-line react/prop-types
export default function ButtonGeneral({ func, message, style }) {
  return (
    <>
      
        <button className={style} onClick={func}>
          {message}
        </button>      
    </>
  );
}
