import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightToBracket, faCartShopping, faUserPlus } from "@fortawesome/free-solid-svg-icons"

import { Link } from "react-router-dom"
import { useSelector } from "react-redux"


const NavBar=()=> {

    const state = useSelector((state)=> state.handleCart)

    const handleLinkClick = () => {
        const navbarCollapse = document.getElementById("navbarSupportedContent");
        if (navbarCollapse && navbarCollapse.classList) {
            navbarCollapse.classList.remove("show");
        }
    }

    return (
        <div>
            <nav className="navbar navbar-expand-xl navbar-ligth bg-white py-3 shadow-sm">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className="navbar-brand fw-blod fs-4" to="/">
                        E-commerce
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link onClick={handleLinkClick} className="nav-link active" aria-current="page" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={handleLinkClick} className="nav-link" to="/SobreNosotros">Sobre nosotros</Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={handleLinkClick} className="nav-link" to="/NuestrosProductos">Nuestros productos</Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={handleLinkClick} className="nav-link" to="/Contactanos">Contáctanos</Link>
                            </li>
                        </ul>
                        <div className="button">
                            <Link to="/Acceder" className="btn btn-outline-primary"><FontAwesomeIcon icon={faArrowRightToBracket} className="me-1" />Acceder</Link>
                            <Link to="/Registrarse" className="btn btn-success ms-2"><FontAwesomeIcon icon={faUserPlus} className="me-1" />Regístrate</Link>
                            <Link to="/Carrito" className="btn btn-outline-danger ms-2"><FontAwesomeIcon icon={faCartShopping} className="me-1" />Carrito ({state.length})</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default NavBar;