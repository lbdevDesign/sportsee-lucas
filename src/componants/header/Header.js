import React from 'react';
import LogoSportSee from '../../assets/logo_SportSee.svg'

import './header.css'

function Header() {
  return (
    <header className='header-container'>
        <section className='header'>
            <div className="logo">
                <img src={LogoSportSee} alt='Logo SportSee' />
            </div>
            <nav>
                <ul className="menu">
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#">Profil</a></li>
                    <li><a href="#">Réglage</a></li>
                    <li><a href="#">Communauté</a></li>
                </ul>
            </nav>
        </section>
    </header>
  );
}

export default Header;