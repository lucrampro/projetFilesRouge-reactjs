import React from 'react';
// IMPORT DES ASSETS
import human from '../assets/img/picto-human.png';
import stadium from '../assets/img/picto-stadium.png';
import athlete from '../assets/img/picto-athlete.png';

// DEBUT DU COMPONENT
const Home = () => {
    return (
        <div className="home">
            <div className="home__top__bloc">
                <div className="prevention flex-center ">
                    <img src={"https://via.placeholder.com/518x412"} alt=""/>
                    <div className="top__bloc--text" >
                        <h1>Prévoyez des transports pour tous</h1>
                        <p>Les Jeux Olympiques de Paris 2024 est l’événement majeur des prochaines années. <br/>
                           Sont attendus n personnes pour assister aux Jeux Olympiques, tout autant sont attendues dans les transports en commun pour se rendre sur les lieux où vont se dérouler les épreuves. Sont comptés dans ces visiteurs, les personnes en situation de handicap pour qui les transports en commun sont une épreuve.    
                        </p>
                        <p className="question">
                            <span>
                                Une question se pose :
                            </span>
                            Quelles gares nécessitent en priorité une prise en charge pour les rendres accessibles aux personnes en situation de handicap ?
                        </p>
                        <p>
                        Une sélection d’informations associée à une carte intéractive vous guidera pour vos potentiels futurs travaux.
                        </p>
                    </div>

                </div>
                
            </div>
            <div className="chiffres">
            <ul>
                <li><img src={human} alt=""/> Entre 15 et 20 millions de visiteurs attendus</li>
                <li><img src={stadium} alt=""/> 36 infrastructures pour
                 les épreuves dans toute la France26 infrastructures sur Paris et les alentours proches</li>
                <li><img src={athlete} alt=""/> 10 500 athlètes attendus</li>
            </ul>
        </div>
        </div>
    );
}
// EXPORT
export default Home