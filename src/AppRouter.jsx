import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Home } from "./components/Home";
import { ListaDePublicaciones } from "./components/ListaDePublicaciones";
import { Navbar } from "./components/Navbar.jsx";
import './App.css';
import { DetallePublicacion } from "./components/DetallePublicacion";


export const AppRouter = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
            
            <Route path="/" element={<Home />} />
                        
            <Route path="/publicaciones" element={ <ListaDePublicaciones />} />

            <Route path="/detalle/:id" element={<DetallePublicacion />} />
                        

        </Routes>
      </div>
    </>
  )
}
