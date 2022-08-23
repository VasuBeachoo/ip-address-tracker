import styled from "styled-components";
import SearchBar from "./components/SearchBar";
import InfoDisplay from "./components/InfoDisplay";

const MapBox = styled.div``;

const Heading = styled.h1``;

const TopBox = styled.div``;

const AppBox = styled.div``;

const App = () => {
  return (
    <AppBox>
      <TopBox>
        <Heading>IP Address Tracker</Heading>
        <SearchBar />
        <InfoDisplay />
      </TopBox>
      <MapBox></MapBox>
    </AppBox>
  );
};

export default App;
