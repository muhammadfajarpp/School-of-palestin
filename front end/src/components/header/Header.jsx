import React from 'react';
import fajo from '../../assets/fajo.jpg'
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
        <div className="container-fluid">
          {/* Add the image logo here */}
          <a className="navbar-brand" href="#">
            <img
              src={fajo}
              alt="Logo"
              width="30"
              height="30"
              className="d-inline-block align-text-top"
            />
            {/* Navbar */}
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/'  className="nav-link  fw-bold text-info">

                HOME
                </Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#">HELP</a> */}
              </li>
              <li className="nav-item dropdown">


                <a className="nav-link dropdown-toggle fw-bold text-info" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  COURSES
                </a>

                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">BCA</a></li>
                  <li><a className="dropdown-item" href="#">BBA</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">More</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/contact"  className="nav-link fw-bold text-info">
                 CONTACT
                </Link>
              </li>
              <li className="nav-item ">
                <Link to='/aboutus'  className="nav-link fw-bold text-info">
                ABOUT US
                </Link>

              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2 border border-info border border-2" type="search" placeholder="Search " aria-label="Search" />
              <button className="btn btn-outline-info" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
