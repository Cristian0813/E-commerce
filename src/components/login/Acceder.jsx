import React from 'react'
import { Link } from 'react-router-dom'

const Acceder = () => {
  return (
    <>
        <div className="container my-3 py-3">
        <h1 className="text-center">INICIAR SESIÓN</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div class="my-3">
                <label for="display-4">Dirección de correo electrónico</label>
                <input type="email" class="form-control" id="floatingInput" placeholder="nombre@email.com" />
              </div>
              <div class="my-3">
                <label for="floatingPassword display-4">Contraseña</label>
                <input type="password" class="form-control" id="floatingPassword" placeholder="Contraseña" />
              </div>
              <div className="my-3">
                <p>¿Eres nuevo? <Link to="/Registrarse" className="text-decoration-underline">Registrarse</Link> </p>
              </div>
              <div className="text-center">
                <button class="my-2 mx-auto btn btn-dark" type="submit" disabled>
                    Iniciar sesión
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Acceder