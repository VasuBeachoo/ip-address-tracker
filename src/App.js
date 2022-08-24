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
  return (
    <AppBox>
      <GlobalStyle />
      <TopBox>
        <Heading>IP Address Tracker</Heading>
        <SearchBar />
        <InfoDisplay />
      </TopBox>
      <InteractiveMap />
    </AppBox>
  );
};

export default App;
