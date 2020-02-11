import React, { useState } from 'react';
// IMPORT DES COMPONENTS, LIBS.. 
import TraisJaune from './Trais--jaune';
import gsap from 'gsap';
// STYLE
import '../App.scss'
// DEBUT DU COMPONENTS 

const Filter = () =>{
  // HOOKS
  const [toogleMenu, setToogleMenu] = useState(false)
  // FUNCTION
  const openMenu = () => {
    if( toogleMenu === false ){
      setToogleMenu(true)
      gsap.to('.filter', 1, { x:0 })
    } else {
      setToogleMenu(false)
      gsap.to('.filter', 1, { x: '-100%' })
    }
  }
  return(
    <div className="filter">
    <div className="filter--wrapper">
      <div className="filter--title d-flex">
        <TraisJaune/>
        <h3>Carte intéractive</h3>
      </div>
      <p className="filter--subtitle">
        Notre base de données vous aide à visualiser et panifier des potentiels futurs travaux d’accessibilité.
      </p>
      <div className="trais-gris"></div>
      <ul>
      Gares et/ou arrêts <span className="text-warning">accessibles</span>
        <li>
          <input type="checkbox"/>
          <label htmlFor="Stations de métros"> Stations de métros </label>
        </li>
        <li>
        <input type="checkbox"/>
        <label htmlFor="Gares RER"> Gares RER </label>
        </li>
      </ul>
      <div className="trais-gris"></div>
      <ul>
      Gares et/ou arrêts <span className="text-warning">non-accessibles</span>
        <li>
          <input type="checkbox"/>
          <label htmlFor="Stations de métros"> Stations de métros </label>
        </li>
        <li>
        <input type="checkbox"/>
        <label htmlFor="Gares RER"> Gares RER </label>
        </li>
        <li>
        <input type="checkbox"/>
        <label htmlFor="Arrêts de bus">Arrêts de bus</label>
        </li>
      </ul>
      <div className="trais-gris"></div>
      <ul>
         <span className="text-warning">Autres</span> éléments
        <li>
          <input type="checkbox"/>
          <label htmlFor="Stations de métros">Gares/Arrêts et station avec une forte <br/> fréquentation</label>
        </li>
        <li>
        <input type="checkbox"/>
        <label htmlFor="Gares RER"> Travaux en cours sur le réseau SNCF/RATP </label>
        </li>
      </ul>
      <p className="reset">Réinitialiser les filtres</p>
      <button className="recap">Voir le recapitulatif</button>
      <button className="choose">Choisir un autre repère</button>
      <div className="open-menu" onClick={openMenu} ></div>
      {/* FIN */}
    </div>
  </div>
  )
}

export default Filter