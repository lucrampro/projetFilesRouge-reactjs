import React, { useState, useEffect } from 'react';
// IMPORT DE COMPONENT, LIBS..
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Filter from './Filter';
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
  const [api, setApi] = useState('')

  // FUNCTION

  const onMarkerClick = (props, marker, e) => {
    setActiveMarkers(marker)
    setShowingInfoWindow(true)
    setSelectedPlace(props)
    setInfoName(marker.name)
  }


  const testData = markerData.map((item, i) => {
    return(
      <Marker 
        name={item.nom}
        icon={item.picto}
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
    })
  }, [api])

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
        <h1>{infoName}</h1>
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