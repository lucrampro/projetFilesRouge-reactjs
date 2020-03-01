import React, {useEffect} from 'react';
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
import logoHetic from '../assets/img/logo--hetic.png'
import logoStavo from '../assets/img/logo.png'
// IMPORT DES STYLES, LIBS..
import '../App.scss'
import '../style/home.scss'
import gsap from 'gsap'
// IMPORT DES COMPONENTS
import Header from './Header'
import Graphique from './Graphique'
import Footer from './Footer'
import {Link} from "react-router-dom";
// DEBUT DU COMPONENT

const Home = () => {
	
	const intro = () => {

		let intro = gsap.timeline()
		let scroll = gsap.timeline({ repeat: -1})
		let ease = 'ease: "expo.inOut"'
		// intro
		intro.set('html', { overflow: 'hidden' })
		.set('.wrapper--bloc--one', { opacity: 0 })
		.set('.logo--stavo, .logo--hetic', {scale: 0})
		.to('.logo--stavo, .logo--hetic', 0.7, { scale: 1, ease })
		.to('.logo--hetic', .45, { top: '40%', ease }, 'start')
		.to('.logo--stavo', .45, { top: '65%', ease }, 'start')
		.to('.logo--stavo, .logo--hetic', 1, { opacity: 0 }, 'start+=1.2')
		.to('.black', 0.75, {height: 0, ease}, 'end')
		.to('.yellow', 0.75, {height: 0, ease }, 'end+=0.1')
		.set('.wrapper--intro', { display: 'none' })
		.to('.wrapper--bloc--one', 1, { opacity: 1 })
		.set('html', { overflowY: 'scroll' })

		// PICTO QUI MONTRE AU UTILISATEUR QU'IL Y A DU CONTENU SI ON SCROLL
		scroll.to('.picto--scroll', 1.5, { y: '20px', ease: "expo.inOut" })
		.to('.picto--scroll', 0.5, { y: 0 }).timeScale(1.5)

	}

	useEffect(() => {
		intro()
	})
	return (
			<div className='home'>
				<div className="wrapper--intro">
						<img className='logo--stavo' src={logoStavo} alt=""/>
						<img className='logo--hetic' src={logoHetic} alt=""/>
					<div className="wrapper--overlay">
						<div className="overlay yellow"></div>
						<div className="overlay black"></div>
					</div>
				</div>
				<Header />
				<div className="wrapper--bloc--one">
					<h1>Visualisez les travaux en cours et possibles pour l’accessibilité des transports dans Paris</h1>
					<p>Visionnez et provoyée facilement de potentiels <span className="text-warning">futurs</span> <span className="text-warning">travaux d’accessibilités</span> en vue des JO Paris 2024</p>
					<div className="separateur--blanc"></div>
                    <button> <Link to="/Carte">Carte interactive </Link></button>
					<img className='picto--scroll' src={pictoScroll} alt=""/>
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
					title="L’accessibilité aujourd’hui en Ile-de-france"
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