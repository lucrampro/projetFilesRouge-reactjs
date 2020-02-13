import React, { useState } from 'react'; // eslint-disable-line
// IMPORT DE COMPONENT, LIBS..
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'; // eslint-disable-line
import Filter from './Filter';
import TraisJaune from './Trais--jaune';
// STYLE
import '../App.scss'
import '../style/carte.scss'
// DEBUT DU COMPONENT
const Carte = ({google}) => {

  // HOOKS
  // const [selectedPlace, setSelectedPlace] = useState(null);
  // const [activeMarkers ,setActiveMarkers] = useState(null);
  // const [showingInfoWindow, setShowingInfoWindow] = useState(false);

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
  
  const toto = [
    {
      id : 1,
      name : "Restaurant",
      title : "Le duc",
      longitude : 2.4211505003287126,
      latitude : 48.8512844148994,
      active : false      
    },
    {
      id : 2,
      name : "Cinema",
      title : "Gaumont",
      longitude : 2.418229003786947,
      latitude : 48.850736553471464,
      active : false      
    },
  ]

  const testToto = toto.map((item) => {
    return(
      <Marker name={item.name}
      icon={"https://developers.google.com/maps/documentation/javascript/examples/full/images/parking_lot_maps.png"}
      position={{lat: item.latitude, lng: item.longitude}} ></Marker>
    )
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
          onClick={onMapClicked}
        >

        <Marker 
          name={'Current location'}
          onClick={onMarkerClick}
        />
          
          <TraisJaune position={{lat: 48.924459,
            lng: 2.360164}} ></TraisJaune>

        {/* <InfoWindow
          marker={activeMarkers}
          visible={showingInfoWindow}>
            <div>
              <h1>{selectedPlace}</h1>
            </div>
        </InfoWindow> */}
        {testToto}
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