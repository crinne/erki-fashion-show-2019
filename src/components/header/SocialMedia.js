import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next/hooks';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const LangIcon = styled.div`
  cursor: pointer;
  height: 5rem;
  color: white;
  text-transform: uppercase;
  padding: 0.5rem;
`;

const LangIconText = styled.span`
  display: inline-block;
  font-size: 2rem;
  font-weight: 400;
  margin-left: 2rem;
`;

const SocialMedia = () => {
  const [t, i18n] = useTranslation();

  return (
    <Container>
      <LangIcon>
        <LangIconText onClick={() => i18n.changeLanguage('et')}>
          EST
        </LangIconText>
        <LangIconText onClick={() => i18n.changeLanguage('en')}>
          ENG
        </LangIconText>
      </LangIcon>
    </Container>
  );
};

export default SocialMedia;
