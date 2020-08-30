import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        {/* <a className="navbar-brand" href="#">Aj-Jobs</a> */}
        <NavLink className="navbar-brand" to="/">Aj-Jobs</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ml-auto mr-5">
            <li className="nav-item  px-3">
              <NavLink exact className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink className="nav-link" to="/about">About Us</NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink className="nav-link" to="/services">Services</NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink className="nav-link" to="/blogs">Blogs</NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header