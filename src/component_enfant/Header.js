import React from 'react'
// IMPORT DES LIBRARIE
import { Link } from 'react-router-dom'
// DEBUT DU COMPONENT ENFANT
const Header = () => {
    return (
        <header>
            <img src={'https://via.placeholder.com/100x50'} alt="" className="logo"/>
            <li> <Link to="/statistique"> STATISTIQUE</Link> </li>
            <li> <Link to="/"> HOME</Link> </li>
        </header>
    );
}
// EXPORT
export default Header