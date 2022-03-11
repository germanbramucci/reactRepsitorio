import { useState } from "react"
import React from 'react'


function ItemCount(){

    const [count, setCount] = useState(1)

    const sumaItem=()=>{
        setCount(count+1)
    }
    const restaItem=()=>{
        setCount(count-1)
    }
    return<>
        <div className="contenedorCount">
            <button className="sumaItem" type="button" onClick={()=>sumaItem()}>+</button>
            <div className="contador">{count}</div>
            <button className="restaItem" type="button" onClick={()=>restaItem()}>-</button>
        </div>
    </>
}

export default ItemCount