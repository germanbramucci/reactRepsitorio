
import React from 'react'
import logo from '../logoD.jpg'
import Carrito from './Carrito'

function navBar() {
    return<>
        <nav className='navBar'>
            <a href=""><img src={logo} className="logo"/></a>
            <ul className="main-nav">
                    <li>
                        <a href="" className='items'>Inicio</a>
                    </li>
                    <li>
                        <a href="" className='items'>Camisetas</a>
                    </li>
                    <li>
                        <a href="" className='items'>Nosotros</a>
                    </li>
                    <li>
                        <a href="" className='items'>Login</a>
                    </li>
                    <li>
                        <a href="" className="logo"><Carrito/></a>
                    </li>
                </ul>
        </nav>
    </>
}


export default navBar