import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [listaProductos, setListaProductos] = useState([]);
  const productos = [
    { nombre: "Manchester United 2007 Visitante", precio: "150USD", region: "Europa", id: '1' },
    { nombre: "Boca Jrs 2009 Local", precio: "120USD", region: "America" },
    { nombre: "Argentina Local 2001", precio: "80USD", region: "Selecciones" },
  ];

  const {categoryId} = useParams()
  console.log(categoryId)


  const imprimirProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (productos.length === 0) {
          reject("sin productos disponibles");
        } else {
          resolve(productos);
        }
      }, 1000);
    });
  };

  useEffect(() => {
    imprimirProductos()
      .then((respuesta) =>{
        if(!categoryId){
          setListaProductos(respuesta)
        }else{
          setListaProductos(respuesta.filter((productos)=>productos.region === categoryId))
        }
      })
      .catch((error) => console.error(error));
  }, [categoryId]);

  return (
    <div>
      <h1>Camisetas</h1>;
      <ItemList lista={listaProductos} />
    </div>
  );
};

export default ItemListContainer;