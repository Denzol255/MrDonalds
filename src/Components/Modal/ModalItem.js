import React, { useContext } from 'react';
import styled from 'styled-components';
import { BtnAdd } from '../Styled/BtnAdd';
import { CountItem } from './CountItem';
import { useCount } from '../Hooks/useCount';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';
import { Toppings } from './Toppings';
import { Choices } from './Choices';
import { useToppings } from '../Hooks/useTopping';
import { useChoices } from '../Hooks/useChoices';
import { Context } from '../Functions/context';
import { Overlay } from '../Styled/Overlay';

const Modal = styled.div`
  background-color: #fff;
  width: 600px;
  height: 650px;
`;

const Banner = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;
`;

const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-family: 'Pacifico', cursive;
  font-weight: 700;
  font-size: 30px;
  line-height: 53px;
  color: #000000;
  margin-bottom: 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 53px 0px 37px;
`;

const TotalPriceItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ModalItem = () => {
  const {
    openItem: { openItem, setOpenItem },
    orders: { orders, setOrders },
  } = useContext(Context);
  const counter = useCount(openItem.count);
  const toppings = useToppings(openItem);
  const choices = useChoices(openItem);
  const isEdit = openItem.index > -1;

  const order = {
    ...openItem,
    count: counter.count,
    topping: toppings.toppings,
    choice: choices.choice,
  };

  const editOrder = () => {
    const newOrders = [...orders];
    newOrders[openItem.index] = order;
    setOrders(newOrders);
    setOpenItem(null);
  };

  const addToOrder = () => {
    setOrders([...orders, order]);
    setOpenItem(null);
  };
  const closeModal = (e) => {
    if (e.target.classList.contains('overlayModal')) {
      setOpenItem(null);
    }
  };

  return (
    <Overlay className="overlayModal" onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img} />
        <Content>
          <HeaderContent>
            <p>{openItem.name}</p>
            <p>{formatCurrency(openItem.price)}</p>
          </HeaderContent>
          <CountItem {...counter} />
          {openItem.toppings && <Toppings {...toppings} />}
          {openItem.choices && <Choices {...choices} openItem={openItem} />}
          <TotalPriceItem>
            <span>Цена: </span>
            <span>{formatCurrency(totalPriceItems(order))}</span>
          </TotalPriceItem>
          <BtnAdd
            onClick={isEdit ? editOrder : addToOrder}
            disabled={order.choices && !order.choice}
          >
            {isEdit ? 'Редактировать' : 'Добавить'}
          </BtnAdd>
        </Content>
      </Modal>
    </Overlay>
  );
};
