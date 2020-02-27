import React, { useEffect } from 'react'
// IMPORT DES LIBRARIE
import { Link } from 'react-router-dom'
import gsap from 'gsap';
// ASSETS
import Logo from '../assets/img/logo.png'
// DEBUT DU COMPONENT ENFANT
import '../style/header.scss'

const Header = () => {

useEffect(() => {
    window.addEventListener('scroll', () => {
        gsap.to('.header, .header ul li a', 0.5, {
            backgroundColor: '#ffffff',
            color: '#000000'
        })
    })
    console.log(Link)
})
    return (
        <header className="header container-fluid d-flex">
            <div><img src={Logo} alt=""/></div>
            <ul className="d-flex">
            <li> <Link to="/"> Accueil </Link> </li>
            <li> <Link to="/Carte"> Carte intéractive </Link> </li>
            <li> <Link to="/Contact"> Contact </Link> </li>
            </ul>
        </header>
    );
}
// EXPORT
export default Header