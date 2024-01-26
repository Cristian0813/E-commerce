import React, { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Productos = () => {

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState(data);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDataAsync = async () => {
            try {
                const response = await axios.get('http://localhost:3000/ApiRouter/products', { withCredentials: true });
                // console.log('Fetched data:', response.data);
                setData(response.data);
                setFilteredData(response.data); // Actualiza filteredData con los datos obtenidos
            } catch (error) {
                console.error('Error al obtener datos:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchDataAsync();
    }, []);

    const Cargando = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-primary me-2" onClick={() => setFilteredData(data)}>Todo</button>
                    <button className="btn btn-outline-primary me-2" onClick={() => filterProduct("men's clothing")}>Ropa para Hombre</button>
                    <button className="btn btn-outline-primary me-2" onClick={() => filterProduct("women's clothing")}>Ropa para Mujer</button>
                    <button className="btn btn-outline-primary me-2" onClick={() => filterProduct("jewelery")}>Joyería</button>
                    <button className="btn btn-outline-primary me-2" onClick={() => filterProduct("electronics")}>Electrónico</button>
                </div>
                <div className="col-sm-5 col-md-4 col-lg-3 mb-4">
                    <Skeleton height={350} />
                </div>
                <div className="col-sm-5 col-md-4 col-lg-3 mb-4">
                    <Skeleton height={350} />
                </div>
                <div className="col-sm-5 col-md-4 col-lg-3 mb-4">
                    <Skeleton height={350} />
                </div>
                <div className="col-sm-5 col-md-4 col-lg-3 mb-4">
                    <Skeleton height={350} />
                </div>
                <div className="col-sm-5 col-md-4 col-lg-3 mb-4">
                    <Skeleton height={350} />
                </div>
                <div className="col-sm-5 col-md-4 col-lg-3 mb-4">
                    <Skeleton height={350} />
                </div>
                <div className="col-sm-5 col-md-4 col-lg-3 mb-4">
                    <Skeleton height={350} />
                </div>
                <div className="col-sm-5 col-md-4 col-lg-3 mb-4">
                    <Skeleton height={350} />
                </div>
                <div className="col-sm-5 col-md-4 col-lg-3 mb-4">
                    <Skeleton height={350} />
                </div>
                <div className="col-sm-5 col-md-4 col-lg-3 mb-4">
                    <Skeleton height={350} />
                </div>
                <div className="col-sm-5 col-md-4 col-lg-3 mb-4">
                    <Skeleton height={350} />
                </div>
                <div className="col-sm-5 col-md-4 col-lg-3 mb-4">
                    <Skeleton height={350} />
                </div>
                <div className="col-sm-5 col-md-4 col-lg-3 mb-4">
                    <Skeleton height={350} />
                </div>
                <div className="col-sm-5 col-md-4 col-lg-3 mb-4">
                    <Skeleton height={350} />
                </div>
                <div className="col-sm-5 col-md-4 col-lg-3 mb-4">
                    <Skeleton height={350} />
                </div>
                <div className="col-sm-5 col-md-4 col-lg-3 mb-4">
                    <Skeleton height={350} />
                </div>
                <div className="col-sm-5 col-md-4 col-lg-3 mb-4">
                    <Skeleton height={350} />
                </div>
                <div className="col-sm-5 col-md-4 col-lg-3 mb-4">
                    <Skeleton height={350} />
                </div>
                <div className="col-sm-5 col-md-4 col-lg-3 mb-4">
                    <Skeleton height={350} />
                </div>
                <div className="col-sm-5 col-md-4 col-lg-3 mb-4">
                    <Skeleton height={350} />
                </div>
            </>
        );
    };

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilteredData(updatedList);
    }

    const MostrarProductos = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-primary me-2" onClick={() => setFilteredData(data)}>Todo</button>
                    <button className="btn btn-outline-primary me-2" onClick={() => filterProduct("men's clothing")}>Ropa para Hombre</button>
                    <button className="btn btn-outline-primary me-2" onClick={() => filterProduct("women's clothing")}>Ropa para Mujer</button>
                    <button className="btn btn-outline-primary me-2" onClick={() => filterProduct("jewelery")}>Joyería</button>
                    <button className="btn btn-outline-primary me-2" onClick={() => filterProduct("electronics")}>Electrónico</button>
                </div>
                {filteredData.map((product) => {
                    return (
                        <div className="col-sm-5 col-md-4 col-lg-3 mb-4" key={product.id}>
                            <div className="card h-350 text-center p-4" >
                                <img src={product.image} className="card-img-top" alt={product.title} height={250} />
                                <div className="card-body">
                                    <h5 className="card-title mb-0" title={product.title}>{product.title.substring(0, 11)}...</h5>
                                    <p className="card-text lead fw-bold">${product.price}</p>
                                    <Link to={`/NuestrosProductos/${product.id}`} className="btn btn-primary">Comprar ahora</Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
                
            </>
        );
    };

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">ÚLTIMO PRODUCTO</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Cargando /> : <MostrarProductos />}
                </div>
            </div>
        </div>
    );
};
export default Productos;