import React from 'react';
// ASSETS
import Logo from '../assets/img/logo.png'

// STYLE
import '../style/footer.scss'
// IMPORT DES LIBRARIE
import { Link } from 'react-router-dom'

// DEBUT DU COMPONENT

const Footer = () => {
  return(
    <div className="footer">
      <img src={Logo} alt=""/>
      <ul className="d-flex">
        <li> <Link to="/"> Accueil </Link> </li>
        <li> <Link to="/Carte"> Carte intéractive </Link> </li>
        <li> <Link to="/Contact"> Contact </Link> </li>
      </ul>
      <p className="hetic">©2020 - Hetic. Tout droit réservé </p>
    </div>
  )
}

export default Footer