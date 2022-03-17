import React from "react";
import Item from "./Item";

function ItemList({ lista }) {
  return (
    <div>
      {lista.map((item, index) => (
        <div className="card">
          <div className="row">
            <div className="col-md-4">
              <Item
                key={index}
                titulo={item.nombre}
                precio={item.precio}
                region={item.region}
                id={item.id}
                name={item.name}
                description={item.description}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;