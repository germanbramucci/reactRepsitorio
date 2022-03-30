
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logoD.jpg'
import Carrito from './Carrito'
import { CartWidget } from '../CartWidget/CartWidget'

function NavBar() {
    return<>
        <nav className='navBar'>
            <Link className='items' to='/'><img src={logo} className="logo"/></Link>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler items" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon items"></span>
    </button>
    <div className="collapse navbar-collapse items" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className='nav-link items' to='/nosotros'>Nosotros</Link>
          
        </li>
        <li className="nav-item">
        <Link className='nav-link items' to='/login'>Login</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Camisetas
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to="/camisetas/europa">Europa</Link></li>
            <li><Link className="dropdown-item" to="/camisetas/america">America</Link></li>
            <li><Link className="dropdown-item" to="/camisetas/selecciones">Selecciones</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
                    {/* <ul className="main-nav">
                        <li>
                            <Link className='items' to='/'>Inicio</Link>
                        </li>
                        <li>
                            <Link className='items' to='/'>Camisetas</Link>
                        </li>
                        <li>
                            <Link className='items' to='/nosotros'>Nosotros</Link>
                        </li>
                        <li>
                            <Link className='items' to='/login'>Login</Link>
                        </li>
                    </ul> */}
                <CartWidget/>
        </nav>
    </>
}


export default NavBar