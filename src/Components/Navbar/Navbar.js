import React from 'react';
import styled from 'styled-components';
import logoImg from '../image/logo.svg';
import loginImg from '../image/sign.svg';

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 19;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px 0 19px;
  background-color: #299b01;
  color: white;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 24px;
  margin-left: 15px;
`;

const ImgLogo = styled.img`
  width: 50px;
`;

const Login = styled.button`
  position: relative;
  width: 45px;
  font-size: 16px;
  border: none;
  outline: none;
  background-color: transparent;
  color: #ffffff;
`;

export const NavBar = () => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt="логотип"></ImgLogo>
      <H1>MrDonald's</H1>
    </Logo>
    <Login>
      <img src={loginImg} alt="войти"></img>
      <p>войти</p>
    </Login>
  </NavBarStyled>
);