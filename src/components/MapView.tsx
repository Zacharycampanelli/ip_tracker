import { AdvancedMarker, Map } from '@vis.gl/react-google-maps';

type MapViewProps = {
  coordinates: { lat: number | string; lng: number | string };
};

const MapView = ({ coordinates }: MapViewProps) => {
  const lat = Number(coordinates.lat);
  const lng = Number(coordinates.lng);

  const markerPosition = { lat, lng };

  const mapCenter = {
    lat: lat + 0.004,
    lng: lng,
  };

  return (
    <div id="map">
      <Map defaultZoom={13} center={mapCenter} disableDefaultUI={true} mapId="map">
        <AdvancedMarker position={markerPosition}>
          <img src="/icon-location.svg" alt="Location Icon" />
        </AdvancedMarker>
      </Map>
    </div>
  );
};

export default MapView;
