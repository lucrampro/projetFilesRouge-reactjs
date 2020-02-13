import React from 'react';
// IMPORT DES ASSETS
import pictoScroll from '../assets/img/scroll.png';
import cheeseOneOne from '../assets/img/cheese--one--one.png';
import cheeseOneTwo from '../assets/img/cheese--one--two.png';
// IMPORT DES STYLES, LIBS..
import '../App.scss'
import '../style/home.scss'
// IMPORT DES COMPONENTS
import Header from './Header'
import Graphique from './Graphique'
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
					firstQuartImage={cheeseOneOne}
					firstQuartTitle="Des millions de visiteurs attendus" 
					firstQuartSubtitle="1,3 millions de visiteurs sont attendus pour les JO et sont estimé 3,7 milliards de téléspectateurs. 10 500 athlètes sont attendus égelament."
					secondQuartImage={cheeseOneTwo}
					secondQuartTitle="36 infrastructures au total"
					secondQuartSubtitle="26 infrastructures dans Paris et ces alentours. 95% des infrastructures existent déjà. 32 épreuves olympiques se déroulerons dans ces infrastructures."
				/>
				<Graphique/>
			</div>
	);
}
// EXPORT
export default Home