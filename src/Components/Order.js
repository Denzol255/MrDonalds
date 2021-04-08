import React from 'react';
import styled from 'styled-components';
import { BtnAdd } from './BtnAdd';

const OrderStyled = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 80px;
  left: 0;
  background-color: #fff;
  min-width: 380px;
  height: calc(100% - 80px);
`;

const OrderTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
`;

const OrderContent = styled.div`
  flex-grow: 1;
`;

const OrderList = styled.ul``;

const Total = styled.div`
  display: flex;
  & span:first-child {
    flex-grow: 1;
  }
`;

export const Order = () => {
  return (
    <OrderStyled>
      <OrderTitle>ваш заказ</OrderTitle>
      <OrderContent>
        <OrderList></OrderList>
      </OrderContent>
      <Total>
        <span>Итого</span>
        <span>5</span>
        <span>850 P</span>
      </Total>
      <BtnAdd>Оформить</BtnAdd>
    </OrderStyled>
  );
};
