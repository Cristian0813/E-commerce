import React from 'react'
import image3 from "../../assets/image/Ropa_urbana_de_color_blanco.avif" 
import image4 from "../../assets/image/Ropa_de_veraneo_floreada.avif"
import image5 from "../../assets/image/Acesorios.avif"

const SobreNosotros = () => {
    return (
        <>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h2 className="display-6 fw-bolder text-center">SOBRE NOSOTROS</h2>
                        <hr />
                    </div>
                </div>
                <div className="container">
                    <p>En Fake Store, creemos en la magia de las compras en línea. Fundada en 2023 por un grupo de entusiastas del comercio electrónico, nuestra misión es proporcionar a nuestros clientes una experiencia de compra única y emocionante.</p>

                    <h3>Nuestra Historia</h3>
                    <p>Todo comenzó con una visión simple, ofrecer productos innovadores y emocionantes a precios accesibles. Desde nuestros modestos comienzos como una pequeña tienda en línea, hemos crecido para convertirnos en un destino de compras en línea confiable y diversificado. A lo largo de los años, hemos ampliado nuestro catálogo para incluir una amplia variedad de productos, desde dispositivos tecnológicos hasta moda y accesorios de estilo de vida.</p>

                    <h3>Nuestro Compromiso</h3>
                    <p>En Fake Store, nos enorgullece brindar una experiencia de compra excepcional a nuestros clientes. Aquí están algunos de nuestros compromisos fundamentales:</p>

                    <ul>
                        <li><strong>Calidad y Variedad:</strong> Seleccionamos cuidadosamente cada producto en nuestro catálogo para garantizar que cumpla con los más altos estándares de calidad. Desde productos de vanguardia hasta clásicos atemporales, tenemos algo para todos.</li>
                        <li><strong>Precios Asequibles:</strong> Creemos que la calidad no debe comprometerse por el precio. Trabajamos arduamente para ofrecer precios competitivos y ofertas emocionantes para que puedas obtener lo que amas sin romper el banco.</li>
                        <li><strong>Atención al Cliente:</strong> Nuestro equipo de servicio al cliente está aquí para ayudarte en cada paso del camino. Si tienes preguntas, inquietudes o simplemente necesitas asesoramiento, estamos aquí para ti.</li>
                    </ul>

                    <h3>Nuestro Futuro</h3>
                    <p>El mundo del comercio electrónico está en constante evolución, y en Fake Store, estamos emocionados de ser parte de ese viaje. Estamos comprometidos a seguir innovando y brindando a nuestros clientes una experiencia de compra inigualable.</p>

                    <p>Gracias por elegir Fake Store como tu destino de compras en línea. Esperamos que disfrutes de tu tiempo aquí y encuentres productos que te inspiren y hagan sonreír.</p>

                    <hr />

                    <h4 className="text-center py-4">Otros productos</h4>
                    <div className="d-flex justify-content-center">
                        <div className="col-md-3 mb-4 me-4">
                            <div className="card h-350 text-center p-4" >
                                <img src={image3} className="card-img-top" alt="Ropa urbana de color blanco" height="250px" />
                                <div className="card-body">
                                    <h5 className="card-title mb-0" title="">Ropa urbana.</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4 me-4">
                            <div className="card h-350 text-center p-4" >
                                <img src={image4} className="card-img-top" alt="Ropa de veraneo floreada" height="250px" />
                                <div className="card-body">
                                    <h5 className="card-title mb-0" title="">Ropa de verano.</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4 me-4">
                            <div className="card h-350 text-center p-4" >
                                <img src={image5} className="card-img-top" alt="Acesorios" height="250px" />
                                <div className="card-body">
                                    <h5 className="card-title mb-0" title="">Acesorios.</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SobreNosotros