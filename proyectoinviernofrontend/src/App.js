import { Routes, Route } from "react-router-dom"
import "./App.css";
import React from 'react';
import PrincipalHotel from "./pages/vistaInformacionHotel/PrincipalHotel";
import FormAlojamiento from "./pages/registroAlojamiento/FormAlojamiento";

function App() {
  return (
    <>
      <div className="App">
      <Routes>
        <Route path="/infhotel" element={ <PrincipalHotel /> } />
        <Route path="/registrarAloj" element={ <FormAlojamiento /> } />
      </Routes>
      </div>
    </>
  ); 
}

export default App;
