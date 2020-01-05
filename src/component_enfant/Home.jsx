import React from 'react';
// IMPORT DES ASSETS
import human from '../assets/img/picto-human.png';
import stadium from '../assets/img/picto-stadium.png';
import athlete from '../assets/img/picto-athlete.png';
import pictoCarte from '../assets/img/picto-carte.png';
import pictoTrainOne from '../assets/img/picto-train-one.png';
import pictoTrainTwo from '../assets/img/picto-train-two.png';
import pictoTrainThree from '../assets/img/picto-train-three.png';
// IMPORT DES COMPONENTS
import TraisJaune from './Trais--jaune'
import Button from './Button'

// DEBUT DU COMPONENT
const Home = () => {
	return (
			<div className='home container'>
				<div className="row wrapper--transport">
					<div className="col-12 col-lg-4">
						<img src="http://via.placeholder.com/300x416" alt=""/>
					</div>
					<div className="col-12 col-lg-8">
						<div className="row">
							<div className="col-2">
								<TraisJaune/>							</div>
							<div className="col-10 transport"> 
								<h2 className="text-uppercase mb-3">Prévoyez des transports pour tous</h2>
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
								<Button title='NAVIGUER'/>
							</div>
						</div>
					</div>
				</div>
				<div className="row wrapper--chiffres">
					<div className="col-12">
						<div className="row">
							<div className="col-1">
							<TraisJaune/> 
							</div>
							<div className="col">
								<h2 className="text-uppercase">
									Les jeux olympiques en chiffres
								</h2>	
							</div>
						</div>
						<div className="row mt-5">
							<div className="col-12 col-lg-4">
								<img className="mx-auto d-block h-50 " src={human} alt=""/>
								<p className="text-center mt-3"> <span className="text-warning">Entre 15 et 20 millions</span>de visiteurs attendus</p>
							</div>
							<div className="col-12 col-lg-4">
								<img className="mx-auto d-block h-50" src={stadium} alt=""/>
								<p className="text-center mt-3">
								<span className="text-warning">36</span> infrastructures pour les épreuves dans toute la France <br/>
								<span className="text-warning">26</span> infrastructures sur Paris et les alentours proches	
								</p>
							</div>
							<div className="col-12 col-lg-4">
								<img className="mx-auto d-block h-50" src={athlete} alt=""/>
								<p className="text-center mt-3"><span className="text-warning">10 500</span> athlètes attendus</p>
							</div>
						</div>
						<div className="row mt-5">
							<div className="col-12">
								<div className="row">
									<div className="col-1"><TraisJaune/></div>
									<div className="col">
										<h2 className="text-uppercase">L’accessibilité aujourd’hui EN ILE-DE-FRANCE</h2>
									</div>
								</div>
								<div className="row mt-5">
									<div className="col-12 col-lg-4">
										<p>
											<span className="text-warning">1,3 millions </span> de personnes en situation de handicap en Ile-de-France 
										</p>
									</div>
									<div className="col-12 col-lg">
										<img src={pictoCarte} alt=""/>
									</div>
								</div>
								<div className="row mt-2">
									<div className="col-12">
										<div className="row">
											<div className="col">
												<p>Un réseau de transport en partie accessible</p>
											</div>
										</div>
										<div className="row mt-3">
											<div className="col-12 col-lg-4">
												<img className="mx-auto d-block h-50" src={pictoTrainOne} alt=""/>
												<p className="text-center mt-3"> <span className="text-warning">98% </span> sur l’ensemble des lignes RER</p>
											</div>
											<div className="col-12 col-lg-4">
												<img className="mx-auto d-block h-50" src={pictoTrainTwo} alt=""/>
												<p className="text-center mt-3"> <span className="text-warning">3% </span> du réseau de métro</p>
											</div>
											<div className="col-12 col-lg-4">
												<img className="mx-auto d-block h-50" src={pictoTrainThree} alt=""/>
												<p className="text-center mt-3"> <span className="text-warning">76% </span> des bus</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
	);
}
// EXPORT
export default Home