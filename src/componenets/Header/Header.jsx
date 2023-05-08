import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/logo.png'
import './Header.scss'

function Header() {
    return (
        <header className='header'>
            <div className="header__top-black"></div>
            <div className="container">
                <div className="header__inner">
                    <div className="header__inner-right">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="header__inner-center">
                        <ul>
                            <li>
                                <Link to='/'>Startseite</Link>
                                <Link to='/'>Dienstleistungen</Link>
                                <Link to='/'>Kontakt</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="header__inner-left">
                        <Link to='/'>Kontaktformular</Link>
                    </div>
                </div>
            </div>
            <div className="header__bottom-black"></div>
            <div className="header__bottom-red"></div>
        </header>
    )
}

export default Header
