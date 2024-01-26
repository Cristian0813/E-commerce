import "./App.css"

import { Routes, Route } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "react-loading-skeleton/dist/skeleton.css"

import NavBar from "./components/navbar/NavBar"
import Inicio from "./components/home/Inicio"
import Productos from "./components/products/Productos"
import SobreNosotros from "./components/about/SobreNosotros"
import Producto from "./components/product/Producto";
import Contacto from "./components/contact/Contacto"
import Registrarse from "./components/register/Registrarse";
import Acceder from "./components/login/Acceder";
import Carrito from "./components/cart/Carrito";
import Comprobar from "./components/checkout/Comprobar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route exact path="/NuestrosProductos" element={<Productos />} />
        <Route exact path="/NuestrosProductos/:id" element={<Producto />} />
        <Route exact path="/SobreNosotros" element={<SobreNosotros />} />
        <Route exact path="/Contactanos" element={<Contacto />} />
        <Route exact path="/Acceder" element={<Acceder />} />
        <Route exact path="/Registrarse" element={<Registrarse />} />
        <Route exact path="/Carrito" element={<Carrito />} />
        <Route exact path="/Comprobante" element={<Comprobar />} />
      </Routes>
    </>
  )
}

export default App