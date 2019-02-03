import React, { useState, useEffect } from 'react';
import { Slide } from 'react-reveal';
import { useTranslation } from 'react-i18next/hooks';
import styled from 'styled-components';
import SocialMedia from './SocialMedia';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 5px solid white;
  padding: 0.5rem;
  color: var(--color-grey-light);
`;

const CountDownHeader = styled.span`
  font-size: 2rem;
  font-weight: 300;
  margin-left: 1.4rem;
`;

const CountDownBody = styled.div`
  display: flex;
  justify-content: space-around;
`;

const TimeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TimeLabel = styled.span`
  line-height: 4rem;
  font-size: 4rem;
  font-weight: 300;
  padding: 0 1rem;
`;

const UnitLabel = styled.span`
  font-size: 1.7rem;
  font-weight: 300;
`;

const initialState = {
  days: '00',
  hours: '00',
  minutes: '00',
  seconds: '00'
};

const formatNumber = number => {
  return String(number).padStart(2, 0);
};

const countdown = () => {
  const [t] = useTranslation();

  const [timeUntill, setTimeUntill] = useState(initialState);
  useEffect(() => {
    console.log('updated?');
    setInterval(() => getTimeUntil(), 1000);
  }, []);

  const getTimeUntil = () => {
    const time = Date.parse('Mar, 11, 2019 17:00') - Date.parse(new Date());

    if (time < 0) {
      console.log('Date passed');
    } else {
      const seconds = formatNumber(Math.floor((time / 1000) % 60));
      const minutes = formatNumber(Math.floor((time / 1000 / 60) % 60));
      const hours = formatNumber(Math.floor((time / (1000 * 60 * 60)) % -24));
      const days = formatNumber(Math.floor(time / (1000 * 60 * 60 * 24)));

      setTimeUntill({
        days,
        hours,
        minutes,
        seconds
      });
    }
  };

  return (
    <Slide right delay={1000}>
      <MainContainer>
        <Container>
          <CountDownHeader>{t('countdown.title')}</CountDownHeader>
          <CountDownBody>
            <TimeBox>
              <TimeLabel>{timeUntill.days}</TimeLabel>
              <UnitLabel>{t('countdown.day')}</UnitLabel>
            </TimeBox>
            <TimeBox>
              <TimeLabel>{timeUntill.hours}</TimeLabel>
              <UnitLabel>{t('countdown.hour')}</UnitLabel>
            </TimeBox>
            <TimeBox>
              <TimeLabel>{timeUntill.minutes}</TimeLabel>
              <UnitLabel>{t('countdown.min')}</UnitLabel>
            </TimeBox>
            <TimeBox>
              <TimeLabel>{timeUntill.seconds}</TimeLabel>
              <UnitLabel>{t('countdown.sec')}</UnitLabel>
            </TimeBox>
          </CountDownBody>
        </Container>
        <SocialMedia />
      </MainContainer>
    </Slide>
  );
};

export default countdown;
