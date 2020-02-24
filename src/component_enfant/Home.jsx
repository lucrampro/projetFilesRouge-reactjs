import React from 'react';
// IMPORT DES ASSETS
import pictoScroll from '../assets/img/scroll.png';
import cheeseCenterOne from '../assets/img/cheese--center--one.png';
import cheeseCenterTwo from '../assets/img/cheese--center--two.png';
import cheeseOneOne from '../assets/img/cheese--one--one.png';
import cheeseOneTwo from '../assets/img/cheese--one--two.png';
import cheeseOneThree from '../assets/img/cheese--one--three.png';
import cheeseOneFour from '../assets/img/cheese--one--four.png';
import cheeseTwoOne from '../assets/img/cheese--two--one.png';
import cheeseTwoTwo from '../assets/img/cheese--two--two.png';
import cheeseTwoThree from '../assets/img/cheese--two--three.png';
import cheeseTwoFour from '../assets/img/cheese--two--four.png';
// IMPORT DES STYLES, LIBS..
import '../App.scss'
import '../style/home.scss'
// IMPORT DES COMPONENTS
import Header from './Header'
import Graphique from './Graphique'
import Footer from './Footer'
// DEBUT DU COMPONENT

const Home = () => {
	return (
			<div className='home'>
				<Header />
				<div className="wrapper--bloc--one">
					<h1>Vivez une expérience immersive</h1>
					<p>Visionnez et provoyez rapidement de potentiels <span className="text-warning">futurs</span> <span className="text-warning">travaux d’accessiblité</span> en vue des JO Paris 2024</p>
					<div className="separateur--blanc"></div>
					<button>Carte interactive</button>
					<img src={pictoScroll} alt=""/>
				</div>
				<Graphique
					title="Les Jeux Olympiques en quelques chiffres"
					cheeseCenter={cheeseCenterOne}
					firstQuartImage={cheeseOneOne}
					firstQuartTitle="Des millions de visiteurs attendus" 
					firstQuartSubtitle="1,3 millions de visiteurs sont attendus pour les JO et sont estimé 3,7 milliards de téléspectateurs. 10 500 athlètes sont attendus égelament."
					secondQuartImage={cheeseOneTwo}
					secondQuartTitle="36 infrastructures au total"
					secondQuartSubtitle="26 infrastructures dans Paris et ces alentours. 95% des infrastructures existent déjà. 32 épreuves olympiques se déroulerons dans ces infrastructures."
					thirdQuartImage={cheeseOneThree}
					thirdQuartTitle="13 000 kilomètres parcourus"
					thirdQuartSubtitle="Pour le relais de la flamme, 13 000 kilomètres vont être parcourus par 15 millions de personnes traversant 74 villes."
					fourQuartImage={cheeseOneFour}
					fourQuartTitle="3 semaines de compétition"
					fourQuartSubtitle="Plusieurs épreuves tous les jours du 26 juillet au 11 août 2024, incluant les qualifications et les finales."
				/>
				<Graphique
					title="L’accessbilité aujourd’hui en Ile-de-france"
					cheeseCenter={cheeseCenterTwo}
					firstQuartImage={cheeseTwoOne}
					firstQuartTitle="10% de la population" 
					firstQuartSubtitle="1,3 millions de personnes sont en situation de handicap en Ile-de-France soit 10% de la population globale."
					secondQuartImage={cheeseTwoTwo}
					secondQuartTitle="Un réseau peu accessible"
					secondQuartSubtitle="Aujourd’hui, le réseau est peu accessible ; on compte d’accessible 93% sur réseau RER, 76% du réseau de bus et seulement 3% du réseau de métro."
					thirdQuartImage={cheeseTwoThree}
					thirdQuartTitle="148 puis 268 en 2024"
					thirdQuartSubtitle="148 gares sont actuellement accessibles, et 268 gares le seront d’ici 2024. C’est un des plus importants programmes d’investissement."
					fourQuartImage={cheeseTwoFour}
					fourQuartTitle="1,4 milliards d'euros"
					fourQuartSubtitle="1,4 milliards d'euros ont déjà investi d'ici pour permettre d’atteindre 60% du réseau ferré accessible."
				/>
				<Footer/>
			</div>
	);
}
// EXPORT
export default Home