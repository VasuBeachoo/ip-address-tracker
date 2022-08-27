import { useState } from "react";
import styled from "styled-components";
import iconArrow from "../assets/icon-arrow.svg";

export const ArrowIcon = styled.img.attrs({
  src: iconArrow,
  alt: "arrow-icon",
})``;

export const SearchBtn = styled.div`
  position: absolute;
  right: 0;
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  user-select: none;
  height: 100%;
  background: var(--Very-Dark-Gray);
  border: none;
  border-radius: 0 0.5rem 0.5rem 0;
  padding: 0 1.35rem;
  transition: 0.25s;

  &:hover {
    cursor: pointer;
    filter: brightness(1.65);
  }
`;

export const SearchInput = styled.input.attrs({
  type: "text",
  placeholder: "Search for any IP address or domain",
})`
  width: clamp(1rem, 80vw, 30rem);
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  padding: 0.85rem 1rem;
`;

export const SearchBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const SearchBar = ({ className, searchIp }) => {
  const [searchVal, setSearchVal] = useState("");

  return (
    <SearchBox className={className}>
      <SearchInput
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
      />
      <SearchBtn onClick={() => searchIp(searchVal)}>
        <ArrowIcon />
      </SearchBtn>
    </SearchBox>
  );
};

export default SearchBar;
