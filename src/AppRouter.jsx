import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Home } from "./components/Home";
import { ListaDePublicaciones } from "./components/ListaDePublicaciones";
import { Navbar } from "./components/Navbar.jsx";
import './App.css';


export const AppRouter = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
            
            <Route path="/" element={<Home />} />
            
            
            <Route path="/publicaciones" element={ <ListaDePublicaciones />} />
            
            

        </Routes>
      </div>
    </>
  )
}
