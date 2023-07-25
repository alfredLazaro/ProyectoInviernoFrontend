import { Routes, Route } from "react-router-dom"
import "./styles/MapView.css";

import React from 'react';
import PrincipalHotel from "./pages/vistaInformacionHotel/PrincipalHotel";
import MapView from "./pages/mapa/MapView";

function App() {
  return (
    <>
      <div className="App">
      <Routes>
        <Route path="/" element={ <PrincipalHotel /> } />
        <Route path="/map" element={ <MapView/>}/>
      </Routes>
      </div>
    </>
  );
}

export default App;
