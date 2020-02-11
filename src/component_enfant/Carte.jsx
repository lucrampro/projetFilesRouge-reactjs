import React, { useState } from 'react';
// IMPORT DE COMPONENT, LIBS..
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Filter from './Filter'
// STYLE
import '../App.scss'
// DEBUT DU COMPONENT
const Carte = ({google}) => {

  // HOOKS
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [activeMarkers ,setActiveMarkers] = useState(null);
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);

  // FUNCTION
  const onMarkerClick = (props, marker, e) => {
    console.log(this)
    // setSelectedPlace(props);
    // setActiveMarkers(marker);
    // setShowingInfoWindow(true);
    alert('Tu as clique sur un marker')
  }

  const onMapClicked = (props) => {
    // if (showingInfoWindow === true) {
    //   setShowingInfoWindow(false);
    //   setActiveMarkers(null)
    // }
    alert('Tu a clique sur la map')
  }
  
  
  // JSX 👉🏽
    return(
      <div className="google-maps" >
        <Map 
          google={google}
          zoom={16} 
          initialCenter={{
            lat: 48.853,
            lng: 2.35
          }}
          onClick={onMapClicked}
        >

        <Marker 
          name={'Current location'}
          onClick={onMarkerClick}
        />
          
        <InfoWindow
          marker={activeMarkers}
          visible={showingInfoWindow}>
            <div>
              <h1>{selectedPlace}</h1>
            </div>
        </InfoWindow>
        <Marker
          name={'Metro berault'}
          position={{lat: 48.8453687094, lng: 2.42824450629}}
          onClick={onMarkerClick} />
          
        <Marker />
        </Map>
        <Filter/>
      </div>
    )
}
// EXPORT
export default GoogleApiWrapper({
  apiKey: ('AIzaSyA2n7hH6W6cHvZdRX2kBmL0b21ev6WWjag')
})(Carte)
// API KEYS AIzaSyDOKhizomA0Y-3RKB39y32HLm3QbghznNA