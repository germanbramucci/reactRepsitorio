import React from "react";
import img from "../Styles/Imagenes/manchester_united_2009_visitante.jpg"
import { Link } from "react-router-dom";

function Item({ titulo, precio, region, id }) {
    return (
      <div>
        <div className="card" >
          <div className="row">
            <div className="col-md-12">
              <div className="card-body">
                <h4 className="card-title">Modelo {titulo}</h4>
                {/* <img href={img} /> */}
                <img src={img} alt="" />
                <p className="card-text text-secondary">Precio: {precio}</p>
                <p className="card-text text-secondary">
                  Region: {region}
                </p>
              </div>
              <Link to={`/detail/${id}`} className="btn btn-primary">Ver mas</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Item;