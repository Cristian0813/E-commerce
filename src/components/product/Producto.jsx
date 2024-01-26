import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addCart } from '../redux/action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Skeleton from 'react-loading-skeleton';

const Producto = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState({
        image: '',
        category: '',
        title: '',
        rating: { rate: 0 },
        price: 0,
        description: ''
    });
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();
    const addProduct = (producto) => {
        dispatch(addCart(producto));
    };

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/ApiRouter/products/${id}`, { withCredentials: true });
            setProducto(response.data);
        } catch (error) {
            console.error('Error al obtener datos:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    const Cargando = () => {
        return (
            <>
                <div className="col-md-6">
                    <Skeleton height={400} />
                </div>
                <div className="col-md-6" style={{ lineHeight: 2 }}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <div className="d-flex" style={{ lineHeight: 3 }}>
                        <Skeleton className="px-4 py-2" height={50} width={100} />
                        <Skeleton className="ms-2 px-3 py-2" height={50} width={100} />
                    </div>
                </div>
            </>
        );
    };

    const MostrarProducto = () => {
        return (
            <>
                <div className="col-md-6">
                    <img src={producto.image} className="card-img-top" alt={producto.title} height={400} width={400} />
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">{producto.category}</h4>
                    <h1 className="display-5">{producto.title}</h1>
                    <p className="lead">
                        Clasificación {producto.rating && producto.rating.rate}
                        <FontAwesomeIcon icon={faStar} className="me-1" />
                    </p>
                    <h3 className="display-6 fw-bold my-4">${producto.price}</h3>
                    <p className="lead">{producto.description}</p>
                    <button className="btn btn-outline-dark px-4 py-2" onClick={() => addProduct(producto)}>
                        Añadir al Carrito
                    </button>
                    <Link to="/Carrito" className="btn btn-dark ms-2 px-3 py-2">
                        Ir al Carrito
                    </Link>
                </div>
            </>
        );
    };

    return (
        <div>
            <div className="container py-5">
                <div className="row py-4">{loading ? <Cargando /> : <MostrarProducto />}</div>
            </div>
        </div>
    );
};

export default Producto;