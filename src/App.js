import { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import SearchBar from "./components/SearchBar";
import InfoDisplay from "./components/InfoDisplay";
import InteractiveMap from "./components/InteractiveMap";
import patternBg from "./assets/pattern-bg.png";
import "mapbox-gl/dist/mapbox-gl.css";

const Heading = styled.h1`
  color: var(--White);
  font-size: 1.75rem;
  font-weight: 500;
  margin: 0;
`;

const TopBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  width: 100%;
  background: url(${patternBg});
  background-size: cover;
  padding: 2.5rem 0 0 0;
`;

const AppBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

const App = () => {
  const [displayData, setDisplayData] = useState({
    ipAddress: "192.212.174.101",
    location: "Brooklyn, NY 10001",
    timezone: "UTC -05:00",
    isp: "SpaceX Starlink",
  });
  const [viewState, setViewState] = useState({
    longitude: -100,
    latitude: 40,
    zoom: 14,
  });
  const [markerLoc, setMarkerLoc] = useState({ longitude: -100, latitude: 40 });

  const updateApp = (data) => {
    let ipAddress = `${data.ip}`;
    let location = `${data.city}, ${data.country_name}`;
    let timezone = `UTC ${data.time_zone.offset < 0 ? "-" : "+"}${
      data.time_zone.offset < 10 && "0"
    }${Math.abs(data.time_zone.offset)}:00`;
    let isp = `${data.isp}`;
    setDisplayData({
      ipAddress: ipAddress,
      location: location,
      timezone: timezone,
      isp: isp,
    });
    setViewState({
      ...viewState,
      latitude: data.latitude,
      longitude: data.longitude,
    });
    setMarkerLoc({
      latitude: data.latitude,
      longitude: data.longitude,
    });
  };

  const searchIp = async (ip) => {
    const data = await fetch(
      `https://api.ipgeolocation.io/ipgeo?apiKey=1722ca3c9c784c0294d4df98df787759&ip=${ip}`
    ).then((res) => (res.ok ? res.json() : undefined));
    if (data) {
      console.log(data);
      updateApp(data);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
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

      const data = await fetch("https://geolocation-db.com/json/").then((res) =>
        res.json()
      );
      searchIp(data.IPv4);
    };
    fetchData();
  }, []);

  return (
    <AppBox>
      <GlobalStyle />
      <TopBox>
        <Heading>IP Address Tracker</Heading>
        <SearchBar searchIp={searchIp} />
        <InfoDisplay displayData={displayData} />
      </TopBox>
      <InteractiveMap
        viewState={viewState}
        setViewState={setViewState}
        markerLoc={markerLoc}
        setMarkerLoc={setMarkerLoc}
      />
    </AppBox>
  );
};

export default App;
