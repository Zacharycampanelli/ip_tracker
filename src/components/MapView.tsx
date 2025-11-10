import { Map } from "@vis.gl/react-google-maps"
const MapView = () => {
  return (
    <div id="map">
    <Map defaultZoom={13} center={{ lat: 0, lng: 0 }} id="map" />  
    </div>
  )
}

export default MapView
