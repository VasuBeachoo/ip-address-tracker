import styled from "styled-components";

export const DetailValue = styled.p`
  color: var(--Very-Dark-Gray);
  font-size: 1.35rem;
  font-weight: 500;
  line-height: 1.85ch;
  max-width: 20ch;
  margin: 0;

  @media (max-width: 1000px) {
    max-width: 30ch;
  }
`;

export const DetailLabel = styled.h3`
  color: var(--Dark-Gray);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15ch;
  margin: 0;
`;

export const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;
  width: 100%;

  @media (max-width: 1000px) {
    align-items: center;
    text-align: center;
  }
`;

const DisplayDetail = ({ className, label, value }) => {
  return (
    <DetailBox className={className}>
      <DetailLabel>{label}</DetailLabel>
      <DetailValue>{value}</DetailValue>
    </DetailBox>
  );
};

export default DisplayDetail;
