import {
 Map,
 Marker
} from "@vis.gl/react-google-maps"

type MapViewProps = {
  coordinates: { lat: number; lng: number };
}

const MapView = ({ coordinates }: MapViewProps) => {
  return (
    <div id="map">
      <Map defaultZoom={13} center={{ lat: coordinates.lat, lng: coordinates.lng }} disableDefaultUI={true} id="map">
        <Marker position={{ lat: coordinates.lat, lng: coordinates.lng }} icon={{url:"/icon-location.svg", scaledSize: { width: 48, height:64 } }} />
      </Map>
    </div>
  )
}    

export default MapView
