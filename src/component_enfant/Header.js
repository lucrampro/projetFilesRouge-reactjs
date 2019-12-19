import React from 'react'
// IMPORT DES LIBRARIE
import { Link } from 'react-router-dom'
// DEBUT DU COMPONENT ENFANT
const Header = () => {
    return (
        <header>
            <img src={"https://via.placeholder.com/150x50"} alt=""/>
            <div className="wrapper--menu">
            <li> <Link to="/"> Accueil</Link> </li>
            <li> <Link to="/statistique"> Carte intéractive</Link> </li>
            </div>
        </header>
    );
}
// EXPORT
export default Header