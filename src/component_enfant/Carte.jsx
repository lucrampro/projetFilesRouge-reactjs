import React, { useState, useEffect } from 'react';
// IMPORT DE COMPONENT, LIBS..
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Filter from './Filter';
import repereStade from '../assets/img/repere_stade.png'
// STYLE
import '../App.scss'
import '../style/carte.scss'
// DEBUT DU COMPONENT
const Carte = ({google}) => {

  // HOOKS
  const [selectedPlace, setSelectedPlace] = useState(null); // eslint-disable-line
  const [activeMarkers ,setActiveMarkers] = useState(null);
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  const [markerData, setMarkerData] = useState([])
  const [infoName, setInfoName] = useState('')
  const [infoAffluence, setInfoAffluence] = useState('')
  const [infoLigne, setInfoLigne] = useState('')
  const [infoTransport, setInfoTransport] = useState('')
  const [api, setApi] = useState('')

  // FUNCTION

  const onMarkerClick = (props, marker, e, InfoWindow) => {
    setActiveMarkers(marker)
    setShowingInfoWindow(true)
    setSelectedPlace(props)
    setInfoName(marker.name)
    setInfoAffluence(marker.affluence)
    setInfoLigne(marker.ligne)
    setInfoTransport(marker.transport)
  }


  const transportMarker = markerData.map((item, i) => {
    return(
      <Marker 
        name={item.nom}
        affluence={item.affluence}
        icon={item.picto}
        ligne={item.pictoNumeroLigne}
        transport={item.pictoTypeTransport}
        position={{lat: item.latitude, lng: item.longitude}}
        onClick={onMarkerClick}
        key={`${i}__marker`}
        className='marker'
      >
      </Marker>
    )
  })

  useEffect(() => {
    fetch(api)
    .then((response) => {
      return response.json()
    })
    .then((usData) => {
      setMarkerData(usData)
      console.log(`les donne que tu montre ${usData[1]}`)
    })
  }, [api])

  // JSX 👉🏽
    return(
      <div className="google-maps" >
        <Map 
          google={google}
          zoom={10} 
          initialCenter={{
            lat: 48.924459,
            lng: 2.360164
          }}
        >
        {transportMarker}
        <Marker onClick={onMarkerClick} name={'votre choix de depart'} icon={repereStade}  />
        <InfoWindow
          marker={activeMarkers}
          visible={showingInfoWindow}
        >
          <div className="info">
            <img src={infoTransport} alt=""/>
            <img src={infoLigne} alt=""/>
            <p>Lieux: {infoName}</p>
            <p>Niveau d'affluence: {infoAffluence}</p>
          </div>
        </InfoWindow>
  
        </Map>


        <Filter setApi={setApi}/>
      </div>
    )
}
// EXPORT
export default GoogleApiWrapper({
  apiKey: ('AIzaSyA2n7hH6W6cHvZdRX2kBmL0b21ev6WWjag')
})(Carte)