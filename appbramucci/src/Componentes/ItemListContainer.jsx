import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Helpers/firebase";
import { async } from "@firebase/util";

const ItemListContainer = () => {
  const [listaProductos, setListaProductos] = useState([]);


  const {categoryId} = useParams()
  console.log(categoryId)


  // const imprimirProductos = () => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (productos.length === 0) {
  //         reject("sin productos disponibles");
  //       } else {
  //         resolve(productos);
  //       }
  //     }, 1000);
  //   });
  // };

  useEffect(() => {
    const getData = async()=>{
      const query = collection(db,'items');
      const response = await getDocs(query)
      const dataItems = response.docs.map(doc=>{return{id: doc.id, ...doc.data()}})
      setListaProductos(dataItems)
    }
    getData();
    // imprimirProductos()
    //   .then((respuesta) =>{
    //     if(!categoryId){
    //       setListaProductos(respuesta)
    //     }else{
    //       setListaProductos(respuesta.filter((productos)=>productos.region === categoryId))
    //     }
    //   })
    //   .catch((error) => console.error(error));
  }, [categoryId]);

  return (
    <div>
      <h1>Camisetas</h1>;
      <ItemList lista={listaProductos} />
    </div>
  );
};

export default ItemListContainer;