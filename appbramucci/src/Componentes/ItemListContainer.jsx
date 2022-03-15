import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [listaProductos, setListaProductos] = useState([]);
  const productos = [
    { nombre: "3090", precio: "150USD", region: "America" },
    { nombre: "3080", precio: "120USD", region: "Europa" },
    { nombre: "3070", precio: "80USD", region: "Selecciones" },
  ];

  const imprimirProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (productos.length === 0) {
          reject("sin productos disponibles");
        } else {
          resolve(productos);
        }
      }, 3000);
    });
  };
  useEffect(() => {
    imprimirProductos()
      .then((respuesta) => setListaProductos(respuesta))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Remeras</h1>;
      <ItemList lista={listaProductos} />
    </div>
  );
};

export default ItemListContainer;