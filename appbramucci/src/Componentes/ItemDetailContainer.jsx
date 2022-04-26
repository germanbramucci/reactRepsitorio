import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { pedirDatos } from "../Helpers/PedirDatos";
import ItemDetail from './ItemDetail' 
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Helpers/firebase";
// import { async } from "@firebase/util";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
  
    useEffect(() => {
      const itemRef = doc(db, "items", id);
  
      getDoc(itemRef)
        .then((res) => {
          setProduct({
            id: res.id,
            ...res.data(),
          });
        })
  
        .finally(() => setLoading(false));
    }, []);
  
    return loading ? <h2>Cargando...</h2> : <ItemDetail product={product} />;
  };
  
  export default ItemDetailContainer;
// function ItemDetailContainer(){

//     const [item, setItem] = useState(null)
//     const [loading,setLoading]= useState(true)

//     const {itemId} = useParams()

//     useEffect(()=>{

//         setLoading(true)

//         const getData = async()=>{
//             const query = collection(db,'items');
//             const response = await getDocs(query)
//             const dataItems = response.docs.map(doc=>{return{id: doc.id, ...doc.data()}})
//             setItem(dataItems, res.filter((prod)=> prod.id === Number(itemId)))
//           }
//           getData()

//         // pedirDatos(stock)
//         //     .then((res) =>{
//         //         setItem( res.filter((prod)=> prod.id === Number(itemId)) )
//         //     })
//         //     .finally(()=>{
//         //         setLoading(false)
//         //     })
//     })
//         return(
//             <>
//                 {
//                     loading
//                     ? <h2>Cargando...</h2>
//                     : <ItemDetail nombre={item}
//                     />
//                 }
//             </>
//         )
// }

// export default ItemDetailContainer