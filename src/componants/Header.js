import React from "react";
import Logo from "../assets/ishwaryaLogo.gif";
import "./Header.css";
import { Link } from 'react-router-dom';
  

function Navbar() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-1">
          <img src={Logo} className="dynamic-logo" style={{ height: 'auto', width: '100%' }} alt="Ishwarya BI Logo" />
        </div>
        <div className="col-sm-6">
          <div className="row text-center">
            <h2 className="mb-0" style={{ fontSize: '24px', color: 'purple', display: 'inline' }}>
              Ishwarya Institute of Management and Technology
            </h2>
            <span style={{ fontSize: '18px' }}>
              <strong>Center of Excellence from Ishwarya Group of Companies</strong>
            </span>
          </div>
          <div className="row text-center">
            <h3 style={{ fontSize: '14px' }}>AN ISO 9001:2015 Institute</h3>
          </div>

          <nav className="navbar navbar-expand-lg navbar-light">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav d-flex gap-4">
                <li className="nav-item">
                  <Link  to="/Ishwarya-BI">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/mp" className="nav-link">Management Programme</Link>
                </li>
                <li className="nav-item">
                  <a href="/it" className="nav-link">IT Programme</a>
                </li>
                <li className="nav-item">
                  <a href="/au" className="nav-link">About Us</a>
                </li>
                <li className="nav-item">
                <Link  to="/cu" className="nav-link">Contact Us</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="col-sm-3"></div>
      </div>
    </div>
  );
}

export default Navbar;
