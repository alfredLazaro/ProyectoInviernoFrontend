import { Routes, Route } from "react-router-dom"
import "./App.css";
import React from 'react';
import PrincipalHotel from "./pages/viewInformationHotel/PrincipalHotel";
import PrincipalListHoteles from "./pages/viewListHotes/PrincipalListHoles";
import NavBar from "./components/NavBar";
import FormAccommodation from "./pages/registerAccommodation/FormAccommodation";
import FormRestaurant from "./pages/registerRestaurant/FormRestaurant";

function App() {
  return (
    <>
      <div className="App">
      <NavBar />
      <Routes>
        <Route path="/infhotel" element={ <PrincipalHotel /> } />
        <Route path="/hotels" element={<PrincipalListHoteles/>}/>
        <Route path="/registrarAlojamiento" element={ <FormAccommodation /> } />
        <Route path="/registrarRestaurante" element={<FormRestaurant />} />
      </Routes>
      </div>
    </>
  ); 
}

export default App;
