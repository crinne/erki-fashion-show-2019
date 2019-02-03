import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Aadress from './Address';

const Footer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const footer = () => {
  return (
    <Footer>
      <Logo />
      <Aadress />
    </Footer>
  );
};

export default footer;
