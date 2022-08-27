import Map, {
  FullscreenControl,
  GeolocateControl,
  NavigationControl,
  Marker,
} from "react-map-gl";
import iconMarker from "../assets/icon-location.svg";

const InteractiveMap = ({ viewState, setViewState, markerLoc }) => {
  return (
    <Map
      {...viewState}
      onMove={(e) => setViewState(e.viewState)}
      style={{ position: "relative", width: "100%", height: "100vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken="pk.eyJ1IjoiZ2FtZW1hc3RlcjUwMDAiLCJhIjoiY2w3ODF4Yzh3MDQ0dDNvcXJ1bmQycWR2NyJ9.usvwfx-Sevyl-S8ut45bVQ"
    >
      <Marker
        longitude={markerLoc.longitude}
        latitude={markerLoc.latitude}
        anchor="bottom"
      >
        <img src={iconMarker} alt="location-marker-icon" />
      </Marker>
      <FullscreenControl position="bottom-right" />
      <GeolocateControl position="bottom-right" />
      <NavigationControl position="bottom-right" />
    </Map>
  );
};

export default InteractiveMap;
