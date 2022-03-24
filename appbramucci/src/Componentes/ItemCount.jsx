import React from 'react'
import { Link } from 'react-router-dom'


function ItemCount({max = 10, cantidad, setCantidad, agregarCarrito}){


    const sumaItem=()=>{
        cantidad > 1 && setCantidad(cantidad - 1)
    }
    const restaItem=()=>{
        setCount(count-1)
    }
    return<>
        <div className="contenedorCount">
            <button className="btn btn-outline-primary" onClick={restaItem}>-</button>
            <span className="mx-3">{cantidad}</span>
            <button className="btn btn-primary" onClick={sumaItem}>+</button>
            <br/>
            <Link className="btn btn-success my-2" onClick={agregarCarrito} to={"/cart"}>Agregar al carrito</Link>
        </div>
    </>
}

export default ItemCount