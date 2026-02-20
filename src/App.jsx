import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Servicios from './pages/Servicios'


function App(){
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
        </Routes>
      </BrowserRouter>
    )
} 
export default App
