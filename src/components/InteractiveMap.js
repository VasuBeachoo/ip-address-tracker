import Map, {
  FullscreenControl,
  GeolocateControl,
  NavigationControl,
} from "react-map-gl";

const InteractiveMap = () => {
  return (
    <Map
      initialViewState={{
        longitude: -100,
        latitude: 40,
        zoom: 3.5,
      }}
      style={{ position: "relative", width: "100%", height: "100vh" }}
      mapStyle="mapbox://styles/mapbox/satellite-streets-v11"
      mapboxAccessToken="pk.eyJ1IjoiZ2FtZW1hc3RlcjUwMDAiLCJhIjoiY2w3ODF4Yzh3MDQ0dDNvcXJ1bmQycWR2NyJ9.usvwfx-Sevyl-S8ut45bVQ"
    >
      <FullscreenControl />
      <GeolocateControl />
      <NavigationControl />
    </Map>
  );
};

export default InteractiveMap;
