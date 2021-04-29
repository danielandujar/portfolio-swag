import React from 'react'
import Nav from './Nav'
import logo from '../styles/img/logo.png'
import flag from '../styles/img/EN.jpg'

const Header = (menu, strings) => {
    return (
        <header className="header">
            <div className="header__logo-box">
                <img src={logo} className="header__logo" alt="da-logo" />
            </div>
            <div className="header__locale-box">
                <img src={flag} className="header__flag" alt="Current Locale" />
            </div>
            <Nav menu={menu} strings={strings} />
        </header>
    )
}

export default Header