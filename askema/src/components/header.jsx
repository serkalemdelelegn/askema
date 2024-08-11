// Header.js
import React, { useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import logo from '../Assets/Askema logo.png';
import './header.css';
import LanguageSwitcher from '../LanguageSwitcher';

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  };

  const toggleProductDropdown = () => {
    setIsProductDropdownOpen(!isProductDropdownOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg   py-3 ">
      <div className="container blur-lg">
        <NavLink to="/" className="navbar-brand w-8" data-config-id="brand">
          <img src={logo} width="120" height="60" alt="Logo" />
        </NavLink>

        <button
          className="navbar-toggler shadow-none custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navigation"
          aria-controls="navigation"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
          style={{position: 'absolute', right: '1rem', top: '2rem'}}
        >
          <span className="navbar-toggler-icon  text-white">
            <i className="fas fa-bars"></i> {/* Font Awesome bars icon */}
          </span>
        </button>
        <div className={`collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0 ${isMenuOpen ? 'show' : ''}`} id="navigation">
          <ul className="navbar-nav navbar-nav-hover ms-auto">
            <li className="nav-item mx-2">
              <NavLink to="/" className={`nav-link ps-2 cursor-pointer ${location.pathname === '/' ? 'active' : ''}`} style={{color:"white"}}>
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-2 dropdown " onMouseEnter={toggleAboutDropdown} onMouseLeave={toggleAboutDropdown}>
              <a
                href="#"
                className={`nav-link ps-2 cursor-pointer dropdown-toggle ${isAboutDropdownOpen ? 'active' : ''}`}
                role="button"
                style={{color:"white"}}
              >
                About
              </a>
              <div
                className={`dropdown-menu ${isAboutDropdownOpen ? 'show' : ''}`}
                aria-labelledby="navbarDropdown"
                style={{ width: '100%', margin: 0 }} 
               
              >
                <NavLink to="/aboutus" className="dropdown-item" style={{ height: '80px', width: '100%'}}>
                Discover Us
                  {/* <img src={logo} alt="Icon" height='70px' className="icon-image" /> */}
                  
                </NavLink>
                <NavLink to="/founders" className="dropdown-item" style={{ height: '80px', width: '100%'}}>
                Executive Team
                  {/* <img src={logo} alt="Icon" height='70px' className="icon-image" /> */}
                  
                </NavLink>
                
              </div>
            </li>

            <li className="nav-item mx-2">
              <NavLink to="/products" className={`nav-link ps-2 cursor-pointer ${location.pathname === '/' ? 'active' : ''}`} style={{color:"white"}}>
                Products
              </NavLink>
            </li>
          
            <li className="nav-item mx-2">
              <NavLink to="/comment" className={`nav-link ps-2 cursor-pointer ${location.pathname === '/' ? 'active' : ''}`} style={{color:"white"}}>
                Testimonial
              </NavLink>
            </li>
            
            <li className="nav-item mx-2">
              <NavLink to="/contactus" className={`nav-link ps-2 cursor-pointer ${location.pathname === '/' ? 'active' : ''}`} style={{color:"white"}}>
                Contact
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink to="/news" className={`nav-link ps-2 cursor-pointer ${location.pathname === '/' ? 'active' : ''}`} style={{color:"white"}}>
                News
              </NavLink>
            </li>
          </ul>
        </div>

        
      </div>
      <LanguageSwitcher />
    </nav>
  );
}
