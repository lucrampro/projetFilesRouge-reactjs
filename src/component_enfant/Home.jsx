import React from 'react';
// IMPORT DES ASSETS
import human from '../assets/img/picto-human.png';
import stadium from '../assets/img/picto-stadium.png';
import athlete from '../assets/img/picto-athlete.png';
// IMPORT DES COMPONENTS
import TraisJaune from './Trais--jaune'

// DEBUT DU COMPONENT
const Home = () => {
	return (
			<div className='home container-fluide'>
				<div className="row">
					<div className="col-4">
						<img src="http://via.placeholder.com/300x416" alt=""/>
					</div>
					<div className="col-8">
						<div className="row">
							<div className="col-2">
								<TraisJaune/>							</div>
							<div className="col-10 transport"> 
								<h1>Prévoyez des transports pour tous</h1>
								<p>
								Les Jeux Olympiques de Paris 2024 est l’événement majeur des prochaines années.
								Sont attendus plusieurs millions de personnes pour assister aux Jeux Olympiques, tout autant sont attendues dans les transports en commun pour se rendre sur les lieux où vont se dérouler les épreuves. Sont comptés dans ces visiteurs, les personnes en situation de handicap pour qui les transports en commun sont une épreuve.
								</p>
								<p>
									Une question se pose: 
									<span>
									Quelles gares nécessitent en priorité une prise en charge pour les rendres accessibles aux personnes en situation de handicap ?
									</span>
								</p>
								<p>
								Une sélection d’informations associée à une carte intéractive vous guidera pour vos potentiels futurs travaux.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
	);
}
// EXPORT
export default Home