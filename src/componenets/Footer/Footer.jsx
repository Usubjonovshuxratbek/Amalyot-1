import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/logo.png'
import './Footer.scss'

function Footer() {
  return (
    <div className='footer'>
      <div className="container">
        <div className="footer__inner">
            <Link className='footer__inner-link' to='/'>Gelsenkirchen, Horsterstr 106 45897</Link>
            <Link to='/' className='footer__inner-logo'>
              <img src={Logo} alt="" />
            </Link>
            <Link className='footer__inner-link' to='/'>Montag - Freitag 8 bis 18 Uhr</Link>
            <Link className='footer__inner-link' to='/'>Datenschutz</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
