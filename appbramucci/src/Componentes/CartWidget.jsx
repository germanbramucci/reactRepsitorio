import { useContext } from 'react'
import { BsFillCartFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import carrito from '../Styles/Imagenes/carrito-de-compras.png'

export const CartWidget = () => {
    const { carQuantity } = useContext(CartContext);
  
    if (carQuantity === 0) {
      return null;
    } else {
      return (
        <li>
          <Link to="/cart" className="carrito">
            <div>
              <img src={carrito} alt="" />
              <span>{carQuantity}</span>
            </div>
          </Link>
        </li>
      );
    }
  };
  
