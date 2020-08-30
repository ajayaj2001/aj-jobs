import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
        {/* <a class="navbar-brand" href="#">Aj-Jobs</a> */}
        <Link className="navbar-brand" to="/">Aj-Jobs</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNav">
          <ul class="navbar-nav ml-auto mr-5">
            <li class="nav-item  px-3">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li class="nav-item px-2">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li class="nav-item px-2">
              <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li class="nav-item px-2">
              <Link className="nav-link" to="/blogs">Blogs</Link>
            </li>
            <li class="nav-item px-2">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header