import { Routes, Route } from "react-router-dom"
import "./App.css";
import React from 'react';
import PrincipalHotel from "./pages/viewInformationHotel/PrincipalHotel";
import PrincipalListHoteles from "./pages/viewListHotes/PrincipalListHoles";
import NavBar from "./components/NavBar";
import FormAccommodation from "./pages/registerAccommodation/FormAccommodation";
import FormRestaurant from "./pages/registerRestaurant/FormRestaurant";
import FormAlojamiento from "./pages/registroAlojamiento/FormAlojamiento";
import DraggableMarkerExample from "./pages/locationRecord/DraggableMarkerExample";
import Leaflet from 'leaflet'
import './App.css';
import 'leaflet/dist/leaflet.css';
Leaflet.Icon.Default.imagePath =
  '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/'


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
        <Route path="/registrarAloj" element={ <FormAlojamiento /> } />
        <Route path="/recordlocation" element={<DraggableMarkerExample/>} />
      </Routes>
      </div>
    </>
  ); 
}

export default App;
