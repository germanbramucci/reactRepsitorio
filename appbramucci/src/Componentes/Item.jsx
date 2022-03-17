import React from "react";
import ItemCount from "./ItemCount";
import img from "../Styles/Imagenes/manchester_united_2009_visitante.jpg"

function Item({ titulo, precio, region, initial, stock, i }) {
    return (
      <div>
        <div className="card">
          <div className="row">
            <div className="col-md-12">
              <div className="card-body">
                <h4 className="card-title">Modelo del equipo {titulo}</h4>
                {/* <img href={img} /> */}
                <img src={img} alt="" />
                <p className="card-text text-secondary">Precio: {precio}</p>
                <p className="card-text text-secondary">
                  Region: {region}
                </p>
              </div>
              <ItemCount key={i} initial={0} stock={8} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Item;