import React from 'react';
import styled from 'styled-components';

import Countdown from './Countdown';
import Logo from './Logo';
import RegisterButton from './RegisterButton';
import BigTitle from './BigTitle';

const Header = styled.header`
  height: 100vh;
  background-color: #321728;
`;

const HeaderTop = styled.header`
  display: flex;
  justify-content: space-between;
`;

const HeaderBottom = styled.header`
  display: flex;
  justify-content: flex-start;
  padding-left: 5rem;
`;

const index = () => {
  return (
    <Header>
      <HeaderTop>
        <Logo />
        <Countdown />
      </HeaderTop>
      <HeaderBottom>
        <RegisterButton />
        <BigTitle />
      </HeaderBottom>
    </Header>
  );
};

export default index;
