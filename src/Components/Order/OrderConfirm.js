import React, { useContext } from 'react';
import styled from 'styled-components';
import { Overlay } from '../Styled/Overlay';
import { Total, TotalPrice, OrderTitle } from '../Styled/OrderStyles';
import { BtnAdd } from '../Styled/BtnAdd';
import { projection } from '../Functions/secondaryFunction';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';
import { Context } from '../Functions/context';
import { ThxMessage } from '../Order/ThxMessage';

const Modal = styled.div`
  background-color: #fff;
  width: 600px;
  padding: 30px;
`;

const Text = styled.h3`
  text-align: center;
  margin-bottom: 30px;
`;

const ConfirmBtns = styled.div`
  display: flex;
`;

const BtnOut = styled.button`
  display: block;
  width: 250px;
  height: 65px;
  font-size: 21px;
  line-height: 25px;
  border: 2px solid transparent;
  color: #fff;
  background-color: tomato;
  margin-right: 14px;
`;

const rulesData = {
  itemName: ['name'],
  price: ['price'],
  count: ['count'],
  topping: [
    'topping',
    (arr) => arr.filter((obj) => obj.checked).map((obj) => obj.name),
    (arr) => (arr.length ? arr : 'no topping'),
  ],
  choice: ['choice', (item) => (item ? item : 'no choices')],
};

const sendOrder = (dataBase, orders, authentication) => {
  const newOrder = orders.map(projection(rulesData));
  dataBase.ref('orders').push().set({
    nameClient: authentication.displayName,
    email: authentication.email,
    order: newOrder,
  });
};

export const OrderConfirm = ({ firebaseDatabase }) => {
  const {
    orders: { orders, setOrders },
    auth: { authentication },
    orderConfirm: { setOpenOrderConfirm },
    thxMessage: { setOpenThxMessage },
  } = useContext(Context);
  const dataBase = firebaseDatabase();
  const total = orders.reduce(
    (result, order) => totalPriceItems(order) + result,
    0
  );

  const closeModalConfirm = (e) => {
    if (
      e.target.classList.contains('overlayModalConfirm') ||
      e.target.classList.contains('backModalConfirm')
    ) {
      setOpenOrderConfirm(false);
    }
  };

  return (
    <Overlay className="overlayModalConfirm" onClick={closeModalConfirm}>
      <Modal>
        <OrderTitle>{authentication.displayName.split(' ')[0]}</OrderTitle>
        <Text>Осталось только подтвердить заказ</Text>
        <Total>
          <span>Итого:</span>
          <TotalPrice>{formatCurrency(total)}</TotalPrice>
        </Total>
        <ConfirmBtns>
          <BtnAdd
            onClick={() => {
              sendOrder(dataBase, orders, authentication);
              setOrders([]);
              setOpenOrderConfirm(false);
              setOpenThxMessage(true);
              setTimeout(() => setOpenThxMessage(false), 3000);
            }}
          >
            Подтвердить
          </BtnAdd>
          <BtnOut className="backModalConfirm" onClick={closeModalConfirm}>
            Вернуться к заказу
          </BtnOut>
        </ConfirmBtns>
      </Modal>
    </Overlay>
  );
};
