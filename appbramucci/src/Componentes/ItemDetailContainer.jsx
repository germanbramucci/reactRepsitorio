import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pedirDatos } from "../Helpers/PedirDatos";
import ItemDetail from './ItemDetail' 
import { stock } from "../Data/Stock";



function ItemDetailContainer(){

    const [item, setItem] = useState(null)
    const [loading,setLoading]= useState(true)

    const {itemId} = useParams()

    useEffect(()=>{
        setLoading(true)

        pedirDatos(stock)
            .then((res) =>{
                setItem( res.filter((prod)=> prod.id === Number(itemId)) )
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
                    : <ItemDetail nombre={item}
                    />
                }
            </>
        )
}

export default ItemDetailContainer