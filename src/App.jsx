import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Servicios from './pages/Servicios'
import ServicioInstance from "./pages/ServicioInstance"


function App(){
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/servicios/:id" element={<ServicioInstance />} />
        </Routes>
      </BrowserRouter>
    )
} 
export default App