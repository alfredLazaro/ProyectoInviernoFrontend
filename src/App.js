import { Routes, Route } from "react-router-dom"
import "./App.css";
import React from 'react';
import PrincipalHotel from "./pages/viewInformationHotel/PrincipalHotel";
import PrincipalListHoteles from "./pages/viewListHotes/PrincipalListHoles";
import NavBar from "./components/NavBar";
/* import PrincipalHotel from "./pages/vistaInformacionHotel/PrincipalHotel"; */
import FormAlojamiento from "./pages/registroAlojamiento/FormAlojamiento";
import FormRestaurante from "./pages/registroRestaurante/FormRestaurante";

function App() {
  return (
    <>
      <div className="App">
      <NavBar />
      <Routes>
        <Route path="/infhotel" element={ <PrincipalHotel /> } />
        <Route path="/hotels" element={<PrincipalListHoteles/>}/>
        <Route path="/registrarAloj" element={ <FormAlojamiento /> } />
        <Route path="/registrarRestaurante" element={<FormRestaurante />} />
      </Routes>
      </div>
    </>
  ); 
}

export default App;
