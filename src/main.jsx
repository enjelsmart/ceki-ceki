import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"
import App from "./App.jsx"
import Register from "./Register.jsx"
import Home from "./Home.jsx"
import Antrean from "./Antrean.jsx"
import Pembayaran from "./Pembayaran.jsx"
import Sukses from "./Sukses.jsx"
import SplashScreen from "./SplashScreen.jsx"
import PilihTiket from "./PilihTiket.jsx"
import Profil from "./Profil.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pilih-tiket" element={<PilihTiket />} />
        <Route path="/antrean" element={<Antrean />} />
        <Route path="/pembayaran" element={<Pembayaran />} />
        <Route path="/sukses" element={<Sukses />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)