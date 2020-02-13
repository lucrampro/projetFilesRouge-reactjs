import React, { useState } from 'react';
// IMPORT DES COMPONENTS, LIBS.. 
import TraisJaune from './Trais--jaune';
import Transport from './Transport'
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
      gsap.to('.filter', 0.5, { x:0 })
      setToogleMenu(true)
    } else {
      gsap.to('.filter', 0.5, { x: '-100%' })
      setToogleMenu(false)
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
        <Transport title="Gares et/ou arrêts accessibles" check={[{ text: "Stations de métros"  },{ text: "Gares RER"}]} />
        <Transport title="Gares et/ou arrêts non-accessibles" check={[{ text: "Stations de métros"  },{ text: "Gares RER"}, { text: "Arrêts de bus" }]} />
        <Transport title="Autres éléments" check={[{ text: "Gares/Arrêts et station avec une forte fréquentation"  },{ text: "Travaux en cours sur le réseau SNCF/RATP"}]} />
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