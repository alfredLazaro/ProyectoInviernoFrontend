import { Routes, Route } from "react-router-dom"
import "./App.css";
import React from 'react';
import PrincipalHotel from "./pages/viewInformationHotel/PrincipalHotel";
import PrincipalListHoteles from "./pages/viewListHotes/PrincipalListHoles";
import NavBar from "./components/NavBar";
import FormAlojamiento from "./pages/registroAlojamiento/FormAlojamiento";
import PrincipalListRestaurants from "./pages/viewListRestaurants/ViewLisRestaurants";
import PrincipalRestaurant from "./pages/viewInfRestaurant/PrincipalRestaurant";
function App() {
  return (
    <>
      <div className="App">
      <NavBar />
      <Routes>
        <Route path="/infhotel" element={ <PrincipalHotel /> } />
        <Route path="/hotels" element={<PrincipalListHoteles/>}/>
        <Route path="/registrarAloj" element={ <FormAlojamiento /> } />
        <Route path="/restaurantes" element={<PrincipalListRestaurants/>}/>
        <Route path="/infRestaurant" element={<PrincipalRestaurant/>}/>
      </Routes>
      </div>
    </>
  ); 
}

export default App;
