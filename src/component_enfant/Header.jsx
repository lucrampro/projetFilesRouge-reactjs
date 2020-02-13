import React from 'react'
// IMPORT DES LIBRARIE
import { Link } from 'react-router-dom'
// ASSETS
import Logo from '../assets/img/logo.png'
// DEBUT DU COMPONENT ENFANT
import '../style/header.scss'
const Header = () => {
    return (
        <header className="container-fluid d-flex">
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