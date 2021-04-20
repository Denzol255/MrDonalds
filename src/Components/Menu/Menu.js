import React from 'react';
import styled from 'styled-components';
import dbMenu from '../DBMenu';
import { ListItem } from './LIstItem';
import { Banner } from './Banner';
import { useFetch } from '../Hooks/useFetch';
import { Preloader } from '../Preloader/Preloader';

const MenuStyled = styled.menu`
  background-color: #ccc;
  margin-top: 80px;
  margin-left: 380px;
`;

const SectionMenu = styled.section`
  padding: 30px;
`;

export const Menu = ({ setOpenItem }) => {
  const res = useFetch();

  const dbMenu = res.response;

  return (
    <MenuStyled>
      <Banner />
      {res.response ? (
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
      ) : res.error ? (
        <div>Something went wrong...</div>
      ) : (
        <Preloader />
      )}
    </MenuStyled>
  );
};
