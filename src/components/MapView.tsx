import { Map } from "@vis.gl/react-google-maps"

type MapViewProps = {
  coordinates: { lat: number; lng: number };
}

const MapView = ({ coordinates }: MapViewProps) => {
  return (
    <div id="map">
    <Map defaultZoom={13} center={{ lat: coordinates.lat, lng: coordinates.lng }} disableDefaultUI={true} id="map" />  
    </div>
  )
}

export default MapView
