import { Routes, Route } from "react-router-dom"
import "./App.css";
import React from 'react';
import PrincipalHotel from "./pages/viewInformationHotel/PrincipalHotel";
import PrincipalListHoteles from "./pages/viewListHotes/PrincipalListHoles";

function App() {
  return (
    <>
      <div className="App">
      <Routes>
        <Route path="/infhotel" element={ <PrincipalHotel /> } />
        <Route path="/hotels" element={<PrincipalListHoteles/>}/>
      </Routes>
      </div>
    </>
  ); 
}

export default App;
