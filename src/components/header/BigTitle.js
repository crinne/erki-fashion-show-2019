import React from 'react';
import styled from 'styled-components';

const BigTitleContainer = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 1rem;
`;

const BitTitleTextYellow = styled.span`
  font-size: 8rem;
  line-height: 8rem;
  font-weight: 600;
  color: var(--color-yellow);
`;

const BitTitleTextWhite = styled.span`
  font-size: 8rem;
  line-height: 8rem;
  font-weight: 600;
  color: var(--color-white);
`;

const BitTitleTextPink = styled.span`
  font-size: 8rem;
  line-height: 8rem;
  font-weight: 600;
  color: var(--color-pink);
`;

const BigTitle = () => {
  return (
    <BigTitleContainer>
      <BitTitleTextYellow>ERKI</BitTitleTextYellow>
      <BitTitleTextPink>Fashion</BitTitleTextPink>
      <BitTitleTextYellow>Show</BitTitleTextYellow>
      <BitTitleTextWhite>2019</BitTitleTextWhite>
    </BigTitleContainer>
  );
};

export default BigTitle;
