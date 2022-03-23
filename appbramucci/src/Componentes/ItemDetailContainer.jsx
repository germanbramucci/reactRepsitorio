import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pedirDatos } from "../Helpers/PedirDatos";
import ItemDetail from './ItemDetail' 



function ItemDetailContainer(){

    const [item, setItem] = useState(null)
    const [loading,setLoading]= useState(true)

    const {itemId} = useParams()

    useEffect(()=>{
        setLoading(true)

        pedirDatos()
            .then((res) =>{
                setItem( res.find((prod)=> prod.id === Number(itemId)) )
            })
            .finally(()=>{
                setLoading(false)
            })
    })

        return(
            <>
                {
                    loading
                    ? <h2>Cargando...</h2>
                    : <ItemDetail {...item}/>
                }
            </>
        )
}

export default ItemDetailContainer