import styled from "styled-components";
import iconArrow from "../assets/icon-arrow.svg";

export const ArrowIcon = styled.img.attrs({
  src: iconArrow,
  alt: "arrow-icon",
})``;

export const SearchBtn = styled.div``;

export const SearchInput = styled.input.attrs({ type: "text" })``;

export const SearchBox = styled.div``;

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
