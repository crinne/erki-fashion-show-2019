import React from 'react';
import styled from 'styled-components';

import ekaImage from './EKA_EESTI_KUNSTIAKADEEMIA_black.png';

const Img = styled.img`
  height: 15rem;
`;

const logo = () => {
  return <Img src={ekaImage} alt="EKA logo" />;
};

export default logo;
