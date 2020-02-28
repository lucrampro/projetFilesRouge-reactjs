import React from 'react';
// IMPORT DES STYLES, LIBS.. 
import '../style/legend.scss'
import stade from '../assets/img/legend_stade.png'
import acess from '../assets/img/legend_acess.png'
import nonacess from '../assets/img/legend_non_acess.png'
import travaux from '../assets/img/legend_travaux.png'
import petiteafflucence from '../assets/img/petite_afluence.png'
import moyenneafflucence from '../assets/img/moyenne_afluence.png'
import grosseafflucence from '../assets/img/grosse_afluence.png'
// DEBUT DU COMPONENT ENFANT

const Legend = () => {
  return(
    <div className="wrapper--legend">
      <div className="legend">
      <h2>INFO</h2> 
      <ul>
        <li>
        <img src={stade} alt=""/>
        <div className="bloc--text">
          <h3>Stades</h3>
          <p>Plus d’informations sont affichées au clic sur cet élément.</p>
        </div>
        </li>
        <li>
        <img src={acess} alt=""/>
        <div className="bloc--text">
          <h3>Arrêts, stations et gares accessibles</h3>
          <p>Se différencie des éléments similaires <span>non-accessibles</span> par leur <span>couleur verte.</span> <br/>
            Plus d’informations sont affichées au clic sur ces éléments.</p>
        </div>
        </li>
        <li>
        <img src={nonacess} alt=""/>
        <div className="bloc--text">
          <h3>Arrêts, stations et gares non-accessibles</h3>
          <p>Se différencie des éléments similaires <span>accessibles</span> par leur <span>couleur rouge.</span> <br/>
          Plus d’informations sont affichées au clic sur ces éléments.</p>
        </div>
        </li>
        <li>
        <img src={travaux} alt=""/>
        <div className="bloc--text">
          <h3>Station de métro en travaux</h3>
          <p>Le projet du <span>Grand Paris</span> ayant déjà commencé, sont repertoriés sur la cartes les <span>futures station 14 à 18.</span></p>
        </div>
        </li>
        <li>
          <div className="bloc--text">
            <h3>Stations et gares avec une forte affluence</h3>
            <p>Suivant <span>le nombre de rond autour du symbole</span>, la gare/station en question est plus ou moins fréquentés</p>
          </div>
        </li>
        <li className="affluence">
          <img src={petiteafflucence} alt=""/>
          <p>Moins de 15 millions de voyageurs par an</p>
        </li>
          <li className="affluence">
              <img src={moyenneafflucence} alt=""/>
              <p>Entre 16 et 31 millions de voyageurs par an</p>
          </li>
          <li className="affluence">
              <img src={grosseafflucence} alt=""/>
              <p>Plus de 32 millions de voyageurs par an</p>
          </li>
      </ul>
      </div>
    </div>
  )
}
export default Legend