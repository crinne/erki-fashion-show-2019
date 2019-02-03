import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

import { useTranslation } from 'react-i18next/hooks';

const Container = styled.div`
  padding: 0 2rem;
  padding-bottom: 10rem;
  max-width: 100rem;
  margin: 0 auto;
`;

const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const LinkInstagram = styled.a`
  &,
  &:link,
  &:visited {
    text-decoration: none;
    color: black;
    cursor: pointer;
    font-size: 5rem;
    font-weight: 300;
    margin-left: 4rem;
  }
`;

const LinkFacebook = styled.a`
  &,
  &:link,
  &:visited {
    text-decoration: none;
    color: #3c5a99;
    cursor: pointer;
    font-size: 5rem;
    font-weight: 300;
    margin-left: 4rem;
  }
`;

const LinkYoutube = styled.a`
  &,
  &:link,
  &:visited {
    text-decoration: none;
    color: #ff0000;
    cursor: pointer;
    font-size: 5rem;
    font-weight: 300;
    margin-left: 4rem;
  }
`;

const Header = styled.h1`
  text-align: center;

  font-size: 3rem;
  font-weight: 400;
  margin-top: 4rem;
`;
const Paragraph = styled.p`
  font-size: 1.7rem;
  font-weight: 300;
  margin-top: 2rem;
`;

const List = styled.ol`
  padding: 4rem;
`;

const BulletPoint = styled.li`
  font-size: 1.7rem;
  font-weight: 300;
`;

const index = () => {
  const [t] = useTranslation();

  return (
    <Container>
      <Element name="rules">
        <Header>{t('rules.main-info.header')}</Header>
      </Element>
      <Paragraph>{t('rules.main-info.paragraph-1')}</Paragraph>
      <Paragraph>{t('rules.main-info.paragraph-2')}</Paragraph>
      <Paragraph>{t('rules.main-info.paragraph-3')}</Paragraph>

      <Paragraph>{t('rules.first-rule.paragraph')}</Paragraph>
      <List>
        <BulletPoint>{t('rules.first-rule.bullet-point-1')}</BulletPoint>
        <BulletPoint>{t('rules.first-rule.bullet-point-2')}</BulletPoint>
        <BulletPoint>{t('rules.first-rule.bullet-point-3')}</BulletPoint>
        <BulletPoint>{t('rules.first-rule.bullet-point-4')}</BulletPoint>
        <BulletPoint>{t('rules.first-rule.bullet-point-5')}</BulletPoint>
        <BulletPoint>{t('rules.first-rule.bullet-point-6')}</BulletPoint>
        <BulletPoint>{t('rules.first-rule.bullet-point-7')}</BulletPoint>
      </List>
      <Paragraph>{t('rules.second-rule.paragraph')}</Paragraph>
      <List>
        <BulletPoint>{t('rules.second-rule.bullet-point-1')}</BulletPoint>
        <BulletPoint>{t('rules.second-rule.bullet-point-2')}</BulletPoint>
        <BulletPoint>{t('rules.second-rule.bullet-point-3')}</BulletPoint>
      </List>
      <Paragraph>{t('rules.secondary-info.paragraph')}</Paragraph>

      <Paragraph>{t('rules.third-rule.paragraph')}</Paragraph>
      <List>
        <BulletPoint>{t('rules.third-rule.bullet-point-1')}</BulletPoint>
        <BulletPoint>{t('rules.third-rule.bullet-point-2')}</BulletPoint>
        <BulletPoint>{t('rules.third-rule.bullet-point-3')}</BulletPoint>
        <BulletPoint>{t('rules.third-rule.bullet-point-4')}</BulletPoint>
        <BulletPoint>{t('rules.third-rule.bullet-point-5')}</BulletPoint>
      </List>
      <Paragraph>{t('general-info.start-submitting')}</Paragraph>
      <Paragraph>{t('general-info.dealine')}</Paragraph>
      <Paragraph>{t('general-info.final-draft')}</Paragraph>
      <Paragraph>{t('general-info.full-aadress')}</Paragraph>
      <Paragraph>{t('general-info.school-lobby')}</Paragraph>
      <Paragraph>{t('general-info.info')}</Paragraph>
      <Paragraph>{t('general-info.additional-info')}</Paragraph>

      <SocialMediaContainer>
        <LinkFacebook href="https://www.facebook.com/ERKIMoeshow/">
          <FaFacebookF />
        </LinkFacebook>
        <LinkInstagram href="https://www.instagram.com/erkimoeshow/">
          <FaInstagram />
        </LinkInstagram>
        <LinkYoutube href="https://www.youtube.com/user/ERKIFashionshow/">
          <FaYoutube />
        </LinkYoutube>
      </SocialMediaContainer>
    </Container>
  );
};

export default index;
