import React, { useState } from 'react';
// IMPORT DES COMPONENTS, LIBS.. 
import TraisJaune from './Trais--jaune';
import Transport from './Transport'
import gsap from 'gsap';
import iconeMenu from '../assets/img/icone--menu--filtres.png'
// STYLE
import '../App.scss'
// DEBUT DU COMPONENTS
const Filter = ({setApi}) =>{
  // HOOKS
  const [toogleMenu, setToogleMenu] = useState(false)
  // FUNCTION
  const openMenu = () => {

    let xFilter = toogleMenu ? '-100%' : 0;
    gsap.to('.filter', 0.5, { x: xFilter });
    setToogleMenu(!toogleMenu)
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
        <Transport setApi={setApi} helpChoise='1' metroAcess='https://samirchalal.fr/api/access_metros.json?ufr=1' gareAcess='https://samirchalal.fr/api/access_rers.json?ufr=1' title="Gares et/ou arrêts accessibles" check={[{ text: "Stations de métros"  },{ text: "Gares RER"}]} />
        <Transport setApi={setApi} helpChoise='2' metroNonAcess='https://samirchalal.fr/api/access_metros.json?ufr=0' gareNonAcess='https://samirchalal.fr/api/access_rers.json?ufr=0' bus='https://samirchalal.fr/api/access_buses.json?ufr=0'  title="Gares et/ou arrêts non-accessibles" check={[{ text: "Stations de métros"  },{ text: "Gares RER"}, { text: "Arrêts de bus" }]} />
        <Transport setApi={setApi} helpChoise='3' traveaux='https://samirchalal.fr/api/travaux_en_cours.json' title="Autres éléments" check={[{ text: "Travaux en cours sur le réseau SNCF/RATP"}]} />
      <p className="reset">Réinitialiser les filtres</p>
      <button className="recap">Voir le recapitulatif</button>
      <button className="choose">Choisir un autre repère</button>
      <div className="open-menu" onClick={openMenu} >
        <div className="under-wrapper--menu">
          <img src={iconeMenu} alt=""/>
          <p>Filtres</p>  
        </div>
      </div>
      {/* FIN */}
    </div>
  </div>
  )
}

export default Filter