
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import Navbar from './components/Navbar/Navbar';
import VehicleBooking from './components/BookingPod/VehicleBooking';
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Homepage from "./pages/HomePage/HomePage"
import Cars from "./pages/Cars/Cars"

export default function App() {
  return (
   <React.Fragment>

<Navbar/>


    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />}></Route> 
      <Route path="/cars" element={<Cars />}></Route>
      <Route path="*" element={<div>Not found</div>}></Route>
    </Routes>
  </BrowserRouter>

    </React.Fragment>
  
  );
}


