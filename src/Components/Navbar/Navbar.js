import React, { useContext } from 'react';
import styled from 'styled-components';
import logoImg from '../image/logo.svg';
import loginImg from '../image/sign.svg';
import { Context } from '../Functions/context';

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

const User = styled.div`
  display: flex;
  text-align: center;
`;

const LogOut = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  border: 2px solid white;
  border-radius: 50%;
  padding: 1px;
`;

const Figure = styled.figure``;

export const NavBar = () => {
  const {
    auth: { authentication, logIn, logOut },
  } = useContext(Context);
  return (
    <NavBarStyled>
      <Logo>
        <ImgLogo src={logoImg} alt="логотип"></ImgLogo>
        <H1>MrDonald's</H1>
      </Logo>
      {authentication ? (
        <User>
          <Figure>
            <img
              src={loginImg}
              alt={authentication.displayName.split(' ')[0]}
            ></img>
            <figcaption>{authentication.displayName.split(' ')[0]}</figcaption>
          </Figure>
          <LogOut title="Выйти" onClick={logOut}>
            X
          </LogOut>
        </User>
      ) : (
        <Login onClick={logIn}>
          <Figure>
            <img src={loginImg} alt="войти"></img>
            <figcaption>Войти</figcaption>
          </Figure>
        </Login>
      )}
    </NavBarStyled>
  );
};
