import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './LIstItem';
import bannerImg from '../image/banner.png';

const MenuStyled = styled.menu`
  background-color: #ccc;
  margin-top: 80px;
  margin-left: 380px;
`;

const Banner = styled.img`
  width: 100%;
  height: 210px;
`;

const SectionMenu = styled.section`
  padding: 30px;
`;

export const Menu = ({ setOpenItem }) => (
  <MenuStyled>
    <Banner src={bannerImg} alt="Баннер"></Banner>
    <SectionMenu>
      <h2>Бургеры</h2>
      <ListItem itemList={dbMenu.burger} setOpenItem={setOpenItem} />
    </SectionMenu>

    <SectionMenu>
      <h2>Закуски/Напитки</h2>
      <ListItem itemList={dbMenu.other} setOpenItem={setOpenItem} />
    </SectionMenu>
  </MenuStyled>
);
