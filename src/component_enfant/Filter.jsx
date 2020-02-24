import React, { useState } from 'react';
// IMPORT DES COMPONENTS, LIBS.. 
import TraisJaune from './Trais--jaune';
import Transport from './Transport'
import gsap from 'gsap';
// STYLE
import '../App.scss'
// DEBUT DU COMPONENTS
const Filter = ({setApi}) =>{
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
        <Transport setApi={setApi} helpChoise='1' metroAcess='http://samirchalal.fr/api/access_metros.json?ufr=1' gareAcess='http://samirchalal.fr/api/access_rers.json?ufr=1' title="Gares et/ou arrêts accessibles" check={[{ text: "Stations de métros"  },{ text: "Gares RER"}]} />
        <Transport setApi={setApi} helpChoise='2' metroNonAcess='http://samirchalal.fr/api/access_metros.json?ufr=0' gareNonAcess='http://samirchalal.fr/api/access_rers.json?ufr=0' bus='http://samirchalal.fr/api/access_buses.json?ufr=0'  title="Gares et/ou arrêts non-accessibles" check={[{ text: "Stations de métros"  },{ text: "Gares RER"}, { text: "Arrêts de bus" }]} />
        <Transport setApi={setApi} helpChoise='3' forteFrequentation='http://samirchalal.fr/api/access_rers.json' traveaux='http://samirchalal.fr/api/travaux_en_cours.json' title="Autres éléments" check={[{ text: "Gares/Arrêts et station avec une forte fréquentation"  },{ text: "Travaux en cours sur le réseau SNCF/RATP"}]} />
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