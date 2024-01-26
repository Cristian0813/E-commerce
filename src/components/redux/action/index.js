// Para Añadir un Artículo al Carrito
export const addCart = (producto) => {
  return {
    type: "ADDITEM",
    payload: producto,
  };
};

// Para Eliminar un Artículo del Carrito
export const delCart = (producto) => {
  return {
    type: "DELITEM",
    payload: producto,
  };
};
