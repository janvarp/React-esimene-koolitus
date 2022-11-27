import React from 'react'
import './Header.css'
import Logo from '../../assets/Logo.png'


const Header = () => {
  return (
    <div className="header">
    
    <img src={Logo} alt='' className='logo' />

    <ul className='header-menu'>
        <li>Avaleht</li>
        <li>Pildid</li>
        <li>Miks valida mind</li>
        <li>Pakketid</li>
        <li>Arvustused</li>
    </ul>


    </div>
  )
}

export default Header