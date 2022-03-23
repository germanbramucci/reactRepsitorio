import React from "react";


function ItemDetail({nombre, region, precio}){
        return(
            <>
            <div className="container">
                <h2>{nombre}</h2>
                <h5>Precio ${precio}</h5>
                <h5>Region: {region}</h5>
            </div>
            </>
        )
}

export default ItemDetail