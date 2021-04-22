import React, { useContext } from 'react';
import styled from 'styled-components';
import { BtnAdd } from '../Styled/BtnAdd';
import { OrderListItem } from './OrderListItem';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';
import { Context } from '../Functions/context';
import { Total, TotalPrice, OrderTitle } from '../Styled/OrderStyles';

const OrderStyled = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 80px;
  left: 0;
  background-color: #fff;
  width: 380px;
  height: calc(100% - 80px);
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
  padding: 20px;
`;

const OrderContent = styled.div`
  flex-grow: 1;
`;

const OrderList = styled.ul``;

const Empty = styled.p`
  text-align: center;
`;

export const Order = () => {
  const {
    orders: { orders, setOrders },
    openItem: { setOpenItem },
    auth: { authentication, logIn },
    orderConfirm: { setOpenOrderConfirm },
  } = useContext(Context);

  const deleteItem = (index) => {
    const newOrders = [...orders];
    newOrders.splice(index, 1);
    setOrders(newOrders);
  };

  const total = orders.reduce(
    (result, order) => totalPriceItems(order) + result,
    0
  );

  const totalCounter = orders.reduce(
    (result, order) => order.count + result,
    0
  );

  return (
    <OrderStyled>
      <OrderTitle>ваш заказ</OrderTitle>
      <OrderContent>
        {orders.length ? (
          <OrderList>
            {orders.map((order, index) => (
              <OrderListItem
                key={index}
                deleteItem={deleteItem}
                order={order}
                index={index}
                setOpenItem={setOpenItem}
              />
            ))}
          </OrderList>
        ) : (
          <Empty>Список заказов пуст</Empty>
        )}
      </OrderContent>
      {orders.length ? (
        <Total>
          <span>Итого</span>
          <span>{totalCounter}</span>
          <TotalPrice>{formatCurrency(total)}</TotalPrice>
        </Total>
      ) : (
        <Empty>Добавьте что-нибудь для оформления заказа</Empty>
      )}
      {orders.length ? (
        <BtnAdd
          onClick={() => {
            if (authentication) {
              setOpenOrderConfirm(true);
            } else {
              logIn();
            }
          }}
        >
          Оформить
        </BtnAdd>
      ) : (
        false
      )}
    </OrderStyled>
  );
};
