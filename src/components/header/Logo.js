import React from 'react';
import styled from 'styled-components';

import logo from './ERKI_LOGO_2_transparent.png';

const Img = styled.img`
  height: 15rem;
`;

const Logo = () => {
  return <Img src={logo} alt="EKA logo" />;
};

export default Logo;
