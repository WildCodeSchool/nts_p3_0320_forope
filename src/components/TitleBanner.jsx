import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ContainerBanner, Flex } from '../mainStyle';
import truck from './img/truck2.png';

const TitlesBanner = styled(Flex)`
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  margin: 2rem 6rem;
  width: 50%;
  ${(props) => props.theme.mediaMax.xLarge`
    width: 70%;
    margin: 4rem 2rem 1rem 2rem;
  `};

  ${(props) => props.theme.mediaMax.small`
    margin: 4rem 2rem 1rem 2rem;
    width: 90%;
  `};
`;

const TitleBanner = styled.h1`
  font-size: 30px;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.mediumGreen};
  ${(props) => props.theme.mediaMax.small`
  font-size: 28px;
  `};
`;

const SubtitleBanner = styled.p`
  text-align: left;
  align-self: flex-start;
  margin: 0;
  color: ${(props) => props.theme.orange};
`;

const TitleTheme = styled.p`
  color: ${(props) => props.theme.orange};
  align-self: flex-start;
  margin: 0;
  text-transform: uppercase;
`;

const BackgroundBanner = styled.img`
  height: 160%;
  object-fit: cover;
  box-sizing: border-box;
  position: relative;
  right: -30rem;
  z-index: -1000;
`;

export default function BannerTitle({ title, subtitle, theme }) {
  return (
    <ContainerBanner center>
      <TitlesBanner col>
        <TitleTheme>{theme}</TitleTheme>
        <TitleBanner>{title}</TitleBanner>
        <SubtitleBanner>{subtitle}</SubtitleBanner>
      </TitlesBanner>
      <BackgroundBanner src={truck} alt="bg" />
    </ContainerBanner>
  );
}

BannerTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
};
