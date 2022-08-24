import styled from "styled-components";
import DisplayDetail from "./DisplayDetail";

export const Divider = styled.hr`
  height: 4rem;
  opacity: 0.3;
  margin: 0;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const DisplayBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.5rem;
  width: clamp(10rem, 80vw, 70rem);
  background: var(--White);
  border-radius: 0.75rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  padding: 2rem 2.5rem;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 2.65rem 1rem;
  }
`;

const InfoDisplay = ({ className }) => {
  return (
    <DisplayBox className={className}>
      <DisplayDetail label="IP ADDRESS" value="192.212.174.101" />
      <Divider />
      <DisplayDetail label="LOCATION" value="Brooklyn, NY 10001" />
      <Divider />
      <DisplayDetail label="TIMEZONE" value="UTC -05:00" />
      <Divider />
      <DisplayDetail label="ISP" value="SpaceX Starlink" />
    </DisplayBox>
  );
};

export default InfoDisplay;
