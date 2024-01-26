import React from "react"
import Productos from "../products/Productos";
import image1 from "../../assets/image/mochila.avif"
import image2 from "../../assets/image/mochila.png"

const Inicio = () => {
    return (
        <div className="hero">
            <div className="card bg-dark text-white border-0">
                <img src={image1} srcSet={image2} className="card-img opacity-75" alt="Mochila" height={550} />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title text-white display-3 fw-bolder mb-0">FAKE STORE</h5>
                        <p className="card-text text-white lead fs-3" style={{ whiteSpace: 'pre-line' }}>
                            Descubre productos únicos y divertidos en nuestra tienda en línea.
                            <span style={{ display: 'block' }}>Explora la moda para hombre y mujer, joyería y electrónicos a precios increíbles.</span>
                            <span style={{ display: 'block' }}>¡Sumérgete en la diversión de comprar en línea en Fake Store hoy!</span>
                        </p>
                    </div>
                </div>
            </div>
            <Productos />
        </div>
    )
}
export default Inicio;