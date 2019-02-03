import React from 'react';
import { useTranslation } from 'react-i18next/hooks';
import { scroller } from 'react-scroll';

import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  color: var(--color-yellow);
  border: 5px solid var(--color-white);

  text-align: center;
  verticali-align: centre;
  padding: 0 2rem;
  writing-mode: vertical-rl;
  font-size: 3rem;
  line-height: 1.7;
  font-weight: 300;

  background-color: transparent;

  &:hover {
    color: var(--color-white);
    border: 5px solid var(--color-pink);
  }

  &:focus {
    color: var(--color-white);
    border: 5px solid var(--color-yellow);
    outline: 0;
  }

  &:active {
    color: var(--color-pink);
  }
`;

const ButtonText = styled.span`
  writing-mode: vertical-rl;
`;

const RegisterButton = () => {
  const [t] = useTranslation();

  const scrollToElement = element => {
    scroller.scrollTo(element, {
      duration: 1000,
      delay: 100,
      smooth: true
    });
  };

  return (
    <Button onClick={() => scrollToElement('rules')}>
      <ButtonText>{t('big-title.register')}</ButtonText>
    </Button>
  );
};

export default RegisterButton;
