import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import Bars from "../../assets/bars.png";
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <React.StrictMode>
    <div className="header" id="header">
      <img src={Logo} alt="" className="logo" />
      {(menuOpened===false && mobile===true)? (
        <div
          style={{ backgroundColor: "var(--appColor)", padding: "0.5rem", borderRadius: "5px" }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={Bars}
            alt="bars"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          
          
            <Link
              onClick={() => setMenuOpened(false)}
              activeclass="active"
              to="header"
              spy='true'
              smooth='true'
            >
              Avaleht
            </Link>
          
          
            <Link
              onClick={() => setMenuOpened(false)}
              to="pictures"
              spy='true'
              smooth='true'
            >
              Pildid
            </Link>
          
          
            <Link
              onClick={() => setMenuOpened(false)}
              to="reasons"
              spy='true'
              smooth='true'
            >
              Miks valida mind
            </Link>
          
          
            <Link
              onClick={() => setMenuOpened(false)}
              to="pictures"
              spy='true'
              smooth='true'
            >
              Pakketid
            </Link>
          
          
            <Link
              onClick={() => setMenuOpened(false)}
              to="testimonials"
              spy='true'
              smooth='true'
            >
              Arvustused
            </Link>
          
      
        </ul>
      )}
    </div>
    </React.StrictMode>
  );
};

export default Header;
