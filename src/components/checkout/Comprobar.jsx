import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Comprobar = () => {
    const state = useSelector((state) => state.handleCart);

    const EmptyCart = () => {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 py-5 bg-light text-center">
                        <h4 className="p-3 display-5">No hay artículos en el carrito</h4>
                        <Link to="/NuestrosProductos" className="btn btn-outline-dark mx-4">
                            <i className="fa fa-arrow-left"></i> Seguir Comprando
                        </Link>
                    </div>
                </div>
            </div>
        );
    };

    const ShowCheckout = () => {
        let subtotal = 0;
        let enviar = 30.0;
        let totalItems = 0;
        state.map((item) => {
            return (subtotal += item.price * item.qty);
        });

        state.map((item) => {
            return (totalItems += item.qty);
        });
        return (
            <>
                <div className="container py-5">
                    <div className="row my-4">
                        <div className="col-md-5 col-lg-4 order-md-last">
                            <div className="card mb-4">
                                <div className="card-header py-3 bg-light">
                                    <h5 className="mb-0">Resumen del pedido</h5>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                            Productos ({totalItems})<span>${Math.round(subtotal)}</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                            Pagar
                                            <span>${enviar}</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                            <div>
                                                <strong>Monto Total</strong>
                                            </div>
                                            <span>
                                                <strong>${Math.round(subtotal + enviar)}</strong>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 col-lg-8">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h4 className="mb-0">Dirección de la factura</h4>
                                </div>
                                <div className="card-body">
                                    <form className="needs-validation">
                                        <div className="row g-3">
                                            <div className="col-sm-6 my-1">
                                                <label htmlFor="Nombres" className="form-label">Nombres</label>
                                                <input type="text" className="form-control" id="Nombres" name="nombres" placeholder="Nombres" autoComplete="given-name" required />
                                                <div className="invalid-feedback">
                                                    Se requiere nombres válidos.
                                                </div>
                                            </div>
                                            <div className="col-sm-6 my-1">
                                                <label htmlFor="lastName" className="form-label">Apellidos</label>
                                                <input type="text" className="form-control" id="Apellidos" name="apellidos" placeholder="Apellidos" autoComplete="family-name" required />
                                                <div className="invalid-feedback">
                                                    Se requiere apellidos válidos.
                                                </div>
                                            </div>

                                            <div className="col-12 my-1">
                                                <label htmlFor="email" className="form-label"> Correo electrónico </label>
                                                <input type="email" className="form-control" id="email" name="email" placeholder="nombre@email.com" autoComplete="email" required />
                                                <div className="invalid-feedback">
                                                    Introduzca una dirección de correo electrónico válida para recibir actualizaciones de envío
                                                </div>
                                            </div>

                                            <div className="col-12 my-1">
                                                <label htmlFor="address" className="form-label">
                                                    Dirección del domicilio
                                                </label>
                                                <input type="text" className="form-control" id="address" name="address" placeholder="1234 Main St" autoComplete="street-address" required />
                                                <div className="invalid-feedback">
                                                    Please enter your shipping address.
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <label htmlFor="address2" className="form-label">Dirección del domicilio 2{" "} <span className="text-muted">(Optional)</span></label>
                                                <input type="text" className="form-control" id="address2" name="address2" placeholder="Apartamento o Domicilio" autoComplete="address-line2" />
                                            </div>

                                            <div className="col-md-5 my-1">
                                                <label htmlFor="country" className="form-label">Pais</label>
                                                <br />
                                                <select className="form-select" id="country" name="country" autoComplete="country" required>
                                                    <option value="">Seleccione un pais...</option>
                                                    <option>Colombia</option>
                                                </select>
                                                <div className="invalid-feedback">
                                                    Por favor, indique un país válido.
                                                </div>
                                            </div>

                                            <div className="col-md-4 my-1">
                                                <label htmlFor="state" className="form-label">Estado</label>
                                                <br />
                                                <select className="form-select" id="state" name="state" autoComplete="address-level1" required>
                                                    <option value="">Seleccione un estado...</option>
                                                    <option value="1" className="text-dark fw-bold">Bogotá, D.C.</option>
                                                    <option value="2">Amazonas</option>
                                                    <option value="3">Antioquia</option>
                                                    <option value="4">Arauca</option>
                                                    <option value="5">Atlántico</option>
                                                    <option value="6">Bolívar</option>
                                                    <option value="7">Boyacá</option>
                                                    <option value="8">Caldas</option>
                                                    <option value="9">Caquetá</option>
                                                    <option value="10">Casanare</option>
                                                    <option value="11">Cauca</option>
                                                    <option value="12">Cesar</option>
                                                    <option value="13">Chocó</option>
                                                    <option value="14">Córdoba</option>
                                                    <option value="15">Cundinamarca</option>
                                                    <option value="16">Guainía</option>
                                                    <option value="17">Guaviare</option>
                                                    <option value="18">Huila</option>
                                                    <option value="19">La Guajira</option>
                                                    <option value="20">Magdalena</option>
                                                    <option value="21">Meta</option>
                                                    <option value="22">Nariño</option>
                                                    <option value="23">Norte de Santander</option>
                                                    <option value="24">Putumayo</option>
                                                    <option value="25">Quindío</option>
                                                    <option value="26">Risaralda</option>
                                                    <option value="27">San Andrés y Providencia</option>
                                                    <option value="28">Santander</option>
                                                    <option value="29">Sucre</option>
                                                    <option value="30">Tolima</option>
                                                    <option value="31">Valle del Cauca</option>
                                                    <option value="32">Vaupés</option>
                                                    <option value="33">Vichada</option>
                                                </select>
                                                <div className="invalid-feedback">
                                                    Por favor, indique un estado válido.
                                                </div>
                                            </div>

                                            <div className="col-md-3 my-1">
                                                <label htmlFor="city" className="form-label">Ciudad</label>
                                                <input type="text" className="form-control" id="city" name="city" placeholder="Ciudad" autoComplete="address-level2" required />
                                                <div className="invalid-feedback">
                                                    Por favor, indique una ciudad válida.
                                                </div>
                                            </div>
                                        </div>

                                        <hr className="my-4" />

                                        <h4 className="mb-3">Forma de pago</h4>

                                        <div className="row gy-3">
                                            <div className="col-md-6">
                                                <label htmlFor="cc-name" className="form-label">Titular de la tarjeta</label>
                                                <input type="text" className="form-control" id="cc-name" name="cc-name" placeholder="Nombre Apellido" required />
                                                <small className="text-muted">
                                                    Nombre y apellidos que figuran en la tarjeta                                                </small>
                                                <div className="invalid-feedback">
                                                    Se requiere el nombre del titular de la tarjeta ...                                               </div>
                                            </div>

                                            <div className="col-md-6">
                                                <label htmlFor="cc-number" className="form-label">Número de la tarjeta de crédito</label>
                                                <input type="text" className="form-control" id="cc-number" name="cc-number" placeholder="" required />
                                                <div className="invalid-feedback">
                                                    Se requiere el número de tarjeta de la crédito
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <label htmlFor="cc-expiration" className="form-label">Fecha de expiración</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control" id="Mes" name="Mes" placeholder="Mes" />
                                                    <span className="input-group-text" id="basic-addon2">/</span>
                                                    <input type="text" className="form-control" id="year" name="year" placeholder="AA" />
                                                </div>

                                                <div className="invalid-feedback">
                                                    Fecha de expiración requerida
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <label htmlFor="cc-cvv" className="form-label">CVV</label>
                                                    <input type="number" className="form-control" id="cc-cvv" name="cc-cvv" placeholder="123"  required />
                                                    <span className="form-text text-muted">
                                                        <FontAwesomeIcon icon={faCreditCard} /> 3 dígitos al reverso de la tarjeta o 4 dígitos en el anverso de la tarjeta
                                                    </span>
                                                <div className="invalid-feedback">
                                                    Se requiere código de seguridad
                                                </div>
                                            </div>

                                        </div>
                                        <hr className="my-4" />
                                        <button className="w-100 btn btn-primary" type="submit" disabled>Continuar con la compra</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };
    return (
        <>
            <div className="container my-3 py-3">
                <h1 className="text-center">Checkout</h1>
                <hr />
                {state.length ? <ShowCheckout /> : <EmptyCart />}
            </div>
        </>
    );
};

export default Comprobar;