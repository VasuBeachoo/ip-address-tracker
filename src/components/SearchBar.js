import styled from "styled-components";
import iconArrow from "../assets/icon-arrow.svg";

export const ArrowIcon = styled.img.attrs({
  src: iconArrow,
  alt: "arrow-icon",
})``;

export const SearchBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SearchInput = styled.input.attrs({ type: "text" })``;

export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const SearchBar = ({ className }) => {
  return (
    <SearchBox className={className}>
      <SearchInput />
      <SearchBtn>
        <ArrowIcon />
      </SearchBtn>
    </SearchBox>
  );
};

export default SearchBar;
