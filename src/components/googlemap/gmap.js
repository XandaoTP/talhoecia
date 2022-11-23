import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';

function Gmaps() {
    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyChlKowNlgjELm-tStHkkLuTdv46V3txro"
    })
  

    return isLoaded ? (
      <div className='maps'>
        <GoogleMap
          mapContainerStyle={{width: '300px', height: '150px'}}
          center={{
            lat: -19.743134,
            lng: -47.957675
          }}
          zoom={14 }
          options={{
            disableDefaultUI: true,
            disableDoubleClickZoom: true,
            gestureHandling: 'none'
        }}>
        <MarkerF
            position={{
                lat: -19.743134,
                lng: -47.957675
                }}
                />            
        </GoogleMap>
      </div>
    ) : <></>
  }
  
  export default Gmaps