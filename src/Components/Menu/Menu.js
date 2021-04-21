import React from 'react';
import styled from 'styled-components';
import { ListItem } from './LIstItem';
import { Banner } from './Banner';
//import { useFetch } from '../Hooks/useFetch';
import { Preloader } from '../Preloader/Preloader';

const MenuStyled = styled.menu`
  background-color: #ccc;
  margin-top: 80px;
  margin-left: 380px;
`;

const SectionMenu = styled.section`
  padding: 30px;
`;

export const Menu = ({ setOpenItem, dbMenu }) => {
  return (
    <MenuStyled>
      <Banner />
      {dbMenu ? (
        <>
          <SectionMenu>
            <h2>Бургеры</h2>
            <ListItem itemList={dbMenu.burger} setOpenItem={setOpenItem} />
          </SectionMenu>

          <SectionMenu>
            <h2>Закуски/Напитки</h2>
            <ListItem itemList={dbMenu.other} setOpenItem={setOpenItem} />
          </SectionMenu>
        </>
      ) : (
        <Preloader />
      )}
    </MenuStyled>
  );
};
