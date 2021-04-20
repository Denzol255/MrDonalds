import React from 'react';
import styled from 'styled-components';
import preloadImg from '../image/hiss_white.gif';
import bannerImg from '../image/banner.png';

const PreloaderMain = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background-color: #fff;
  z-index: 1001;
`;

const PreloaderImage = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  width: 160px;
  height: 160px;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  background-image: url(${preloadImg});
  background-repeat: no-repeat;
`;

export const Preloader = () => {
  return (
    <PreloaderMain>
      <PreloaderImage></PreloaderImage>
    </PreloaderMain>
  );
};
