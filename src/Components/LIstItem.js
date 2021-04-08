import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 9px;
`;

const Item = styled.li`
  position: relative;
  width: 400px;
  height: 155px;
  background-image: ${({ img }) => `url(${img})`};
  background-position: center;
  background-size: cover;
  font-size: 30px;
  margin: 30px 30px 0 0;
  padding: 15px;
  color: #ffffff;
  z-index: 1;
  transition: all 0.3s ease-out;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: black;
    opacity: 30%;
    z-index: -1;
  }
  &:hover {
    cursor: pointer;
    box-shadow: inset 0 0 30px 20px black;
    &:after {
      opacity: 0;
    }
  }
`;

export const ListItem = ({ itemList, setOpenItem }) => (
  <List>
    {itemList.map((item) => (
      <Item key={item.id} img={item.img} onClick={() => setOpenItem(item)}>
        <p>{item.name}</p>
        <p>
          {item.price.toLocaleString('ru-RU', {
            style: 'currency',
            currency: 'RUB',
          })}
        </p>
      </Item>
    ))}
  </List>
);
