import { useState, useEffect } from "react";
import Map, {
  FullscreenControl,
  GeolocateControl,
  NavigationControl,
  Marker,
} from "react-map-gl";
import iconMarker from "../assets/icon-location.svg";

const InteractiveMap = () => {
  const [viewState, setViewState] = useState({
    longitude: -100,
    latitude: 40,
    zoom: 13,
  });
  const [markerLoc, setMarkerLoc] = useState({ longitude: -100, latitude: 40 });

  useEffect(() => {
    navigator.geolocation &&
      navigator.geolocation.getCurrentPosition((position) => {
        setViewState({
          ...viewState,
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
        setMarkerLoc({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
  }, []);

  return (
    <Map
      {...viewState}
      onMove={(e) => setViewState(e.viewState)}
      style={{ position: "relative", width: "100%", height: "100vh" }}
      mapStyle="mapbox://styles/mapbox/satellite-streets-v11"
      mapboxAccessToken="pk.eyJ1IjoiZ2FtZW1hc3RlcjUwMDAiLCJhIjoiY2w3ODF4Yzh3MDQ0dDNvcXJ1bmQycWR2NyJ9.usvwfx-Sevyl-S8ut45bVQ"
    >
      <Marker
        longitude={markerLoc.longitude}
        latitude={markerLoc.latitude}
        anchor="bottom"
      >
        <img src={iconMarker} alt="location-marker-icon" />
      </Marker>
      <FullscreenControl />
      <GeolocateControl />
      <NavigationControl />
    </Map>
  );
};

export default InteractiveMap;
