import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [listaProductos, setListaProductos,listaApi, setApiProd] = useState([]);
  const productos = [
    { nombre: "3090", precio: "150USD", region: "America" },
    { nombre: "3080", precio: "120USD", region: "Europa" },
    { nombre: "3070", precio: "80USD", region: "Selecciones" },
  ];

  const productosApi = async () => {
    const res = await axios.get(
      "https://fakerapi.it/api/v1/products?_quantity=3&_taxes=12&_categories_type=uuid"
    );

    console.log(res.data.data);
  };


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

  const imprimirProductosApi = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (productosApi.length === 0) {
          reject("sin productos disponibles");
        } else {
          resolve(productosApi);
        }
      }, 5000);
    });
  };

  useEffect(() => {
    imprimirProductos()
      .then((respuesta) => setListaProductos(respuesta))
      .catch((error) => console.error(error));
      imprimirProductosApi()
      .then((respuesta) => setApiProd(respuesta))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Remeras</h1>;
      <ItemList lista={listaProductos} />
      <h3>Aca estan los Productos Api</h3>
    </div>
  );
};

export default ItemListContainer;