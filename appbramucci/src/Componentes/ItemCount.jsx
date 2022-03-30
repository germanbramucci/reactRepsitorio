import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function ItemCount({max = 10, item}){

    const [cantidad, setCantidad] = useState(0)

    const agregarCarrito = (item) =>{
        console.log(item)
    }

    const sumaItem=()=>{
        cantidad < max && setCantidad(cantidad + 1)
    }
    const restaItem=()=>{
        cantidad > 1 && setCantidad(cantidad - 1)
    }
    return<>
        <div className="contenedorCount">
            <button className="btn btn-outline-primary" onClick={restaItem}>-</button>
            <span className="mx-3">{cantidad}</span>
            <button className="btn btn-primary" onClick={sumaItem}>+</button>
            <br/>
            <button className="btn btn-success my-2" onClick={()=>agregarCarrito(item)} >Agregar al carrito</button>
        </div>
    </>
}

export default ItemCount