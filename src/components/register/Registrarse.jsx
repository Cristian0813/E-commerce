import React from "react"
import { Link } from "react-router-dom"

const Registrarse = () => {
    return (
        <>
            <div className="container my-3 py-3">
                <h1 className="text-center">REGISTRARSE</h1>
                <hr />
                <div class="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form>
                            <div class="form my-3">
                                <label for="nombre" class="form-label">Nombre Completo</label>
                                <input type="text" class="form-control" id="Name" placeholder="Introduzca su Nombre" />
                            </div>
                            <div class="form my-3">
                                <label for="email" class="form-label">Dirección de correo electrónico</label>
                                <input type="email" class="form-control" id="Email" placeholder="nombre@email.com" />
                            </div>
                            <div class="form  my-3">
                                <label for="password" class="form-label">Contraseña</label>
                                <input type="password" class="form-control" id="Password" placeholder="Contraseña" />
                            </div>
                            <div className="my-3">
                                <p>¿Ya tiene una cuenta? <Link to="/Acceder" className="text-decoration-underline">Iniciar Sesión</Link> </p>
                            </div>
                            <div className="text-center">
                                <button class="my-2 mx-auto btn btn-dark" type="submit" disabled>
                                    Registrarse
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registrarse