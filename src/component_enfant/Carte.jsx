import React, { useState, useEffect } from 'react';
// IMPORT DE COMPONENT, LIBS..
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Filter from './Filter';
import metroAccess from '../assets/img/metro_accessible.png'
// STYLE
import '../App.scss'
import '../style/carte.scss'
// DEBUT DU COMPONENT
const Carte = ({google}) => {

  // HOOKS
  const [selectedPlace, setSelectedPlace] = useState(null); // eslint-disable-line
  const [activeMarkers ,setActiveMarkers] = useState(null);
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  const [samirData, setSamirData] = useState([])
  const [infoName, setInfoName] = useState('')


  // FUNCTION

  const onMarkerClick = (props, marker, e) => {
    setActiveMarkers(marker)
    setShowingInfoWindow(true)
    setSelectedPlace(props)
    setInfoName(marker.name)
  }


  const testData = samirData.map((item) => {
    return(
      <Marker 
        name={item.nom}
        icon={metroAccess}
        position={{lat: item.latitude, lng: item.longitude}}
        onClick={onMarkerClick}
        key={item.id}
      >
      </Marker>
    )
  })

  useEffect(() => {
    fetch('http://samirchalal.fr/api/lieux_epreuves.json')
    .then((response) => {
      return response.json()
    })
    .then((usData) => {
      setSamirData(usData)
    })

  })

  // JSX 👉🏽
    return(
      <div className="google-maps" >
        <Map 
          google={google}
          zoom={14} 
          initialCenter={{
            lat: 48.924459,
            lng: 2.360164
          }}
        >
        {testData}
        <Marker onClick={onMarkerClick}
                name={'Current location'} />
        <InfoWindow
          marker={activeMarkers}
          visible={showingInfoWindow}
        >
          <div>
        <h1>{infoName}</h1>
          </div>
        </InfoWindow>
  
        </Map>


        <Filter/>
      </div>
    )
}
// EXPORT
export default GoogleApiWrapper({
  apiKey: ('AIzaSyA2n7hH6W6cHvZdRX2kBmL0b21ev6WWjag')
})(Carte)