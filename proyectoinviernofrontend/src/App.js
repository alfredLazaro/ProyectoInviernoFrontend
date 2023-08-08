import { Routes, Route } from "react-router-dom"
import "./App.css";
import React from 'react';
<<<<<<< HEAD
import PrincipalHotel from "./pages/viewInformationHotel/PrincipalHotel";
import PrincipalListHoteles from "./pages/viewListHotes/PrincipalListHoles";
import NavBar from "./components/NavBar";
=======
import PrincipalHotel from "./pages/vistaInformacionHotel/PrincipalHotel";
import FormAlojamiento from "./pages/registroAlojamiento/FormAlojamiento";
>>>>>>> US-1

function App() {
  return (
    <>
      <div className="App">
      <NavBar />
      <Routes>
        <Route path="/infhotel" element={ <PrincipalHotel /> } />
<<<<<<< HEAD
        <Route path="/hotels" element={<PrincipalListHoteles/>}/>
=======
        <Route path="/registrarAloj" element={ <FormAlojamiento /> } />
>>>>>>> US-1
      </Routes>
      </div>
    </>
  ); 
}

export default App;
