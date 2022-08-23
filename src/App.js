import styled from "styled-components";
import SearchBar from "./components/SearchBar";
import InfoDisplay from "./components/InfoDisplay";

const MapBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const Heading = styled.h1``;

const TopBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
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
