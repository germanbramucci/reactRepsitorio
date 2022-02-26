
import React from 'react'
import logo from '../logoD.jpg'

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
                </ul>
        </nav>
                {/* <ul className="main-nav">
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
                </ul>
             */}
            
            
            
            
            {/* <header>
                <nav>
                    <img src={logo} className="logo"/>
                    <div>
                        <p className='items'><label onClick={()=>console.log('click')}>Inicio</label></p>
                    </div>
                    <div>
                        <p className='items'><label onClick={()=>console.log('click')}>Camisetas</label></p>
                    </div>
                    <div>
                        <p className='items'><label onClick={()=>console.log('click')}>Nosotros</label></p>
                    </div>
                    <div>
                        <label onClick={()=>console.log('click')}>Login</label>
                    </div>    
                </nav>
            </header> */}
    </>
}
{/* <header class="header">
    <img src={logo} className="logo"/>
                <ul class="main-nav">
                    <li>
                        <button className='items' type='button'>Inicio</button>
                        <label onClick={()=>console.log('click')} />
                    </li>
                    <li>
                        <button className='items' type='button'>Camisetas</button>
                        <label onClick={()=>console.log('click')}/>
                    </li>
                    <li>
                        <button className='items' type='button'>Nosotros</button>
                        <label onClick={()=>console.log('click')}/>
                    </li>
                    <li>
                        <button className='items' type='button'>Login</button>
                        <label onClick={()=>console.log('click')}/>
                    </li>
                </ul>
	        </header> */}

export default navBar