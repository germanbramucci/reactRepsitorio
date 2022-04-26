
import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../logoD.jpg'
import { CartWidget } from './CartWidget'

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-success">
      <div className="container">
        <NavLink to={"/"} className="navbar-brand">
          <img src={logo} className="logo"/>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#toggleMobileMenu"
          aria-controls="#toggleMobileMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="toggleMobileMenu">
          <ul className="navbar-nav text-center ms-auto">
          <NavLink
                activeClassName="active"
                className="nav-link"
                to={"/firebase"}
              ></NavLink>
            <li>
              <NavLink
                activeClassName="active"
                className="nav-link display-6"
                to={"/category/Europa"}
              >
                {props.link1}
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                className="nav-link display-6"
                to={"/category/America"}
              >
                {props.link2}
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                className="nav-link display-6"
                to={"/category/Selecciones"}
              >
                {props.link3}
              </NavLink>
            </li>
            <CartWidget />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;