import styled from "styled-components";
import DisplayDetail from "./DisplayDetail";

export const Divider = styled.hr``;

export const DisplayBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const InfoDisplay = ({ className }) => {
  return (
    <DisplayBox className={className}>
      <DisplayDetail label="IP ADDRESS" value="value" />
      <Divider />
      <DisplayDetail label="LOCATION" value="value" />
      <Divider />
      <DisplayDetail label="TIMEZONE" value="value" />
      <Divider />
      <DisplayDetail label="ISP" value="value" />
    </DisplayBox>
  );
};

export default InfoDisplay;
