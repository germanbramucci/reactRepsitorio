import React from "react";
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../Context/CartContext"
import ItemCount from "./ItemCount";


function ItemDetail({item}){

    const { agregarAlCarrito, isInCart } = useContext(CartContext)
    const handleAgregar = () => {
        if (cantidad === 0) return
        if (!isInCart(id)) {
            const addItem = {
                id, nombre, precio, stock, cantidad
            }

            agregarAlCarrito(addItem)
        }
    }
    return  (
            <>
                <div className="container">
                    <h2>{item[0].nombre}</h2>
                    <h5>Precio ${item[0].precio}</h5>
                    <h5>Region: {item[0].region}</h5>

                    {/* <ItemCount
                    max={item[0].stock} 
                    item={item}
                    /> */}
                    {
                    isInCart(id) 
                    ?  <Link to="/cart" className="btn btn-success my-3">
                            Terminar mi compra
                        </Link>
                    :
                        <>
                            <ItemCount 
                                max={stock} 
                                counter={cantidad} 
                                setCounter={setCantidad}
                            />

                            <button
                                className="btn btn-success my-2"            
                                onClick={handleAgregar}
                            >
                                Agregar al carrito
                            </button>
                        </>
                    }
                </div>
            </>
            )
}

export default ItemDetail