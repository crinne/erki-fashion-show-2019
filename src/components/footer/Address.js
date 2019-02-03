import React from 'react';
import { useTranslation } from 'react-i18next/hooks';
import styled from 'styled-components';

const Address = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--color-grey-dark);
  align-items: flex-start;
  justify-content: center;
`;

const Text = styled.span`
  font-size: 1.7rem;
  font-weight: 400;
`;

const address = () => {
  const [t] = useTranslation();

  return (
    <Address>
      <Text>{t('contact.school')}</Text>
      <Text>{t('contact.address')}</Text>
      <Text>Tallinn 10412</Text>
      <Text>erki.moeshow@artun.ee</Text>
    </Address>
  );
};

export default address;
