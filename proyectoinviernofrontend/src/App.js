import { Routes, Route } from "react-router-dom"
import "./App.css";
import React from 'react';
import PrincipalHotel from "./pages/vistaInformacionHotel/PrincipalHotel";

function App() {
  return (
    <>
      <div className="App">
      <Routes>
        <Route path="/" element={ <PrincipalHotel /> } />
      </Routes>
      </div>
    </>
  );
}

export default App;
