import React from "react";
import Logo from "../../assets/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";


const Header = () => {
  
  return (
    
    <div className="header" id="header">
      <img src={Logo} alt="" className="logo" />
     
       
        <div className="header-menu">
          
          
          
            <Link to='header'
              style={{ textDecoration: 'none' }}
              activeclass="active"
              spy='true'
              smooth='true'
            >
              Avaleht
            </Link>
          
          
            <Link to="pictures"
              style={{ textDecoration: 'none' }}
              spy='true'
              smooth='true'
            >
              Pildid
            </Link>
          
          
            <Link
              style={{ textDecoration: 'none' }}
              to="reasons"
              spy='true'
              smooth='true'
            >
              Miks valida mind
            </Link>
          
          
            <Link
              style={{ textDecoration: 'none' }}
              to="pictures"
              spy='true'
              smooth='true'
            >
              Pakketid
            </Link>
          
          
            <Link
              style={{ textDecoration: 'none' }}
              to="testimonials"
              spy='true'
              smooth='true'
            >
              Arvustused
            </Link>
          
            
        </div>
    
    </div>
    
  );
};

export default Header;
