import React, {useEffect, useState} from 'react'
// STYLES 
import '../style/start.scss'
// LIBRARIES, ASSETS..
import spectateur from '../assets/img/icone--walk.png'
import { Link } from 'react-router-dom'
// DEBUT DU COMPONENT ENFANTS

const Start = ({longitude, latitude}) => {

const [dataLieu, setdataLieu] = useState([])


const onCardClick = (event , props) => {
  dataLieu.map((item , i) => { // eslint-disable-line
    if (event.target.id == i){ // eslint-disable-line

      longitude(+(event.target.getAttribute('longitude')))
      latitude(+(event.target.getAttribute('latitude')))
      document.querySelector('.wrapper--start').style.display = 'none'
      console.log( `LONGITUDE : ${+(event.target.getAttribute('longitude'))}` )
      console.log( `LATITUDE : ${+(event.target.getAttribute('latitude'))}` )

    } 
  })
}

useEffect(() => {
  async function fetchMap(){
    await fetch('http://samirchalal.fr/api/lieux_epreuves.json')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      setdataLieu(data)
    })
  }
  fetchMap()
})

const lieuCard = dataLieu.map((item , i) => {
  
  return(
    <Link to="/Carte" id={i} onClick={onCardClick} longitude={item.longitude} latitude={item.latitude} key={i} className='card' >
      <img src={item.picture} alt=""/>
      <h2>{item.nom}</h2>
      <p>{item.ville}</p>
      <div className="wrappeur--spectateur">
      <div className="spectateur">
        <img src={spectateur} alt=""/>
      </div>
      <p>spectateurs {item.nombreSpectateurs}</p>
      </div>
    </Link>
  )
})

 return(
   <div className="wrapper--start">
     <div className="start">
       <h2>Choisissez un site sportif</h2>
       <p>Ce lieu sera votre point de repère sur la carte autour duquel vous pourrez naviguer</p>
       <div className="card--wrapper">
          {lieuCard}
       </div>
     </div>
   </div>
 )
}

export default Start