import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft,faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const Carrito = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 text-center">
            <h4 className="p-3 display-5">Su carrito está vacío</h4>
            <Link to="/NuestrosProductos" className="btn  btn-outline-dark mx-4">
              <FontAwesomeIcon icon={faArrowLeft} className="me-1" /> Continuar comprando
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const addItem = (product) => {
    dispatch(addCart(product));
  };
  const removeItem = (product) => {
    dispatch(delCart(product));
  };

  const ShowCart = () => {
    let subtotal = 0;
    let envios = 30.0;
    let totalProductos = 0;
    state.map((item) => {
      return (subtotal += item.price * item.qty);
    });

    state.map((item) => {
      return (totalProductos += item.qty);
    });
    return (
      <>
        <section className="h-100 gradient-custom">
          <div className="container py-5">
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-8">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Lista de Productos</h5>
                  </div>
                  <div className="card-body">
                    {state.map((item) => {
                      return (
                        <div key={item.id}>
                          <div className="row d-flex align-items-center">
                            <div className="col-lg-3 col-md-12">
                              <div className="bg-image rounded" data-mdb-ripple-color="light" >
                                <img src={item.image} alt={item.title} width={100} height={75} />
                              </div>
                            </div>
                            <div className="col-lg-5 col-md-6">
                              <p>
                                <strong>{item.title}</strong>
                              </p>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="d-flex mb-4" style={{ maxWidth: "300px" }} >
                                <button className="btn px-3" onClick={() => {removeItem(item);}} >
                                  <FontAwesomeIcon icon={faMinus} />
                                </button>
                                <p className="mx-5">{item.qty}</p>
                                <button className="btn px-3" onClick={() => {addItem(item); }}>
                                  <FontAwesomeIcon icon={faPlus} />
                                </button>
                              </div>
                              <p className="text-start text-md-center">
                                <strong>
                                  <span className="text-muted">{item.qty}</span>{" "}
                                  x ${item.price}
                                </strong>
                              </p>
                            </div>
                          </div>

                          <hr className="my-4" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-header py-3 bg-light">
                    <h5 className="mb-0">Resumen de pedidos</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Productos ({totalProductos})<span>${Math.round(subtotal)}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        Envíos
                        <span>${envios}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Cantidad total</strong>
                        </div>
                        <span>
                          <strong>${Math.round(subtotal + envios)}</strong>
                        </span>
                      </li>
                    </ul>
                    <Link to="/Comprobante" className="btn btn-dark btn-lg btn-block">Ir al pago</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <>
      <div className="container my-3 py-3">
        <h1 className="text-center">CARRITO</h1>
        <hr />
        {state.length > 0 ? <ShowCart /> : <EmptyCart />}
      </div>
    </>
  );
};

export default Carrito;
