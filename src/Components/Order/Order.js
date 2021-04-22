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

const EmptyHead = styled.h3`
  font-size: 32px;
  margin-bottom: 200px;
`;

const EmptyText = styled.p`
  color: #299b01;
  font-size: 24px;
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
      {orders.length ? (
        <>
          <OrderContent>
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
          </OrderContent>
          <Total>
            <span>Итого:</span>
            <span>{totalCounter}</span>
            <TotalPrice>{formatCurrency(total)}</TotalPrice>
          </Total>
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
        </>
      ) : (
        <Empty>
          <EmptyHead>Список заказов пуст</EmptyHead>
          <EmptyText>Добавьте что-нибудь в заказ для оформления</EmptyText>
        </Empty>
      )}
    </OrderStyled>
  );
};
