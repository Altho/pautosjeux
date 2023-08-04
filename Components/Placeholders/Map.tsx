import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

interface MapProps {
    latitude: number;
    longitude: number;
  }

  const Map: React.FC<MapProps> = ({ latitude, longitude }) => {
    const mapContainerStyle = {
      width: '400px',
      height: '400px',
    };

  const center = {
    lat: latitude,
    lng: longitude,
  };

  return (
    <LoadScript googleMapsApiKey="MY_API_KEY">
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={15}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;