import React from 'react'
import ItemCount from './ItemCount'

function ItemListContainer(props){
    return<>
        <div className="card" >
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque consequatur officia accusamus beatae quas numquam consequuntur eos deserunt iure, fugit accusantium sed molestiae odit nam totam sapiente ducimus nisi est laudantium quo pariatur. Corrupti voluptatum dolorem vitae mollitia facilis? Neque.
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        <div className="card" >
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        <div className="card">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        <ItemCount/>
    </>
}

export default ItemListContainer