import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { Link } from 'react-router-dom';


const Header = () => {

  const mobile = window.innerWidth<=768 ? true:false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header">
    
    <img src={Logo} alt='' className='logo' />

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
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              activeClass="active"
              to="header"
              spy={true}
              smooth={true}
            >
              Avaleht
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="pictures"
              spy={true}
              smooth={true}
            >
              Pildid
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="reasons"
              spy={true}
              smooth={true}
            >
              Miks valida mind
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="plans"
              spy={true}
              smooth={true}
            >
              Pakketid
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="testimonials"
              spy={true}
              smooth={true}
            >
              arvustused
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header