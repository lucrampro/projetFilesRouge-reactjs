import React, { useState, useEffect } from 'react';
// IMPORT DE COMPONENT, LIBS..
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Filter from './Filter';
import Start from './Start'
import repereStade from '../assets/img/repere_stade.png'
import iconeWalk from '../assets/img/icone--walk.png'
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
  const [startLongitude, setstartLongitude] = useState(48.924459)
  const [startLatitude, setstartLatitude] = useState(2.360164)

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
    console.log(startLatitude)
    console.log(startLongitude)

    fetch(api)
    .then((response) => {
      return response.json()
    })
    .then((usData) => {
      setMarkerData(usData)
      console.log(`les donne que tu montre ${usData[1]}`)
    })
  }, [api] ,[startLatitude], [startLatitude])

  // JSX 👉🏽
    return(
      <div className="google-maps" >
        <Map 
          google={google}
          zoom={20} 
          initialCenter={{
            // lat: 48.924459,
            // lng: 2.360164
            lat : {startLatitude},
            lng : {startLongitude}
          }}
        >
        {transportMarker}
        <Marker
          onClick={onMarkerClick}
          name={'votre choix de depart'}
          position={{lat: {startLatitude}, lng: {startLongitude}}}
        />
        <InfoWindow
          marker={activeMarkers}
          visible={showingInfoWindow}
        >
          <div className="info">
            <img src={infoTransport} alt=""/>
            <img src={infoLigne} alt=""/>
            <h2>Lieux: {infoName}</h2>
            <div className="affluence d-flex">
              <img src={iconeWalk} alt=""/>
              <p>{infoAffluence}</p>
            </div>
            
          </div>
        </InfoWindow>
  
        </Map>


        <Filter setApi={setApi}/>
        <Start longitude={setstartLongitude} latitude={setstartLatitude}/>
      </div>
    )
}
// EXPORT
export default GoogleApiWrapper({
  apiKey: ('AIzaSyA2n7hH6W6cHvZdRX2kBmL0b21ev6WWjag')
})(Carte)