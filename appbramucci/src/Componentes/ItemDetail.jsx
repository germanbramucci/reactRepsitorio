import React from "react";
import ItemCount from "./ItemCount";


function ItemDetail({id, nombre, region, precio, stock}){
    
    const [cantidad, setCantidad] = useState(0)

    const agregarCarrito = () => {
        const itemToCart = {
            id,
            nombre,
            precio,
            region,
            stock
        }

        console.log(itemToCart)
    }

    
    return(
            <>
            <div className="container">
                <h2>{nombre}</h2>
                <h5>Precio ${precio}</h5>
                <h5>Region: {region}</h5>

                <ItemCount
                max={stock} 
                cantidad={cantidad} 
                setCantidad={setCantidad}
                handleAgregar={agregarCarrito}
                />
            </div>
            </>
        )
}

export default ItemDetail