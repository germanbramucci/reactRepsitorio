import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../Helpers/firebase";

const ItemListContainer = ({ heading }) => {
  const [products, setProducts] = useState([{}]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();
  console.log(category);
  useEffect(() => {
    const itemsRef = collection(db, "items");
    const q = category
      ? query(itemsRef, where("category", "==", category))
      : itemsRef;

    getDocs(q)
      .then((res) => {
        setProducts(
          res.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          })
        );
      })

      .finally(() => setLoading(false));
  }, [category]);

  return (
    <>
      <h1 className="display-5 text-center primary-heading">{heading}</h1>
      <ItemList products={products} loading={loading} />
    </>
  );
};

export default ItemListContainer;