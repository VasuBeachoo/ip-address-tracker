import styled from "styled-components";

export const DetailValue = styled.p``;

export const DetailLabel = styled.h3``;

export const DetailBox = styled.div``;

const DisplayDetail = ({ className, label, value }) => {
  return (
    <DetailBox className={className}>
      <DetailLabel>{label}</DetailLabel>
      <DetailValue>{value}</DetailValue>
    </DetailBox>
  );
};

export default DisplayDetail;
