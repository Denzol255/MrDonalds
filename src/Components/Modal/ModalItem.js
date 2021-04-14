import React from 'react';
import styled from 'styled-components';
import { BtnAdd } from '../Styled/BtnAdd';

const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
`;

const Modal = styled.div`
  background-color: #fff;
  width: 600px;
  height: 600px;
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
  margin-bottom: 222px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 53px 0px 37px;
`;

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {
  const closeModal = (e) => {
    if (e.target.id === 'overlay') {
      setOpenItem(null);
    }
  };

  const order = {
    ...openItem,
  };

  const addToOrder = () => {
    setOrders([...orders, order]);
    setOpenItem(null);
  };

  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img} />
        <Content>
          <HeaderContent>
            <p>{openItem.name}</p>
            <p>
              {openItem.price.toLocaleString('ru-RU', {
                style: 'currency',
                currency: 'RUB',
              })}
            </p>
          </HeaderContent>
          <BtnAdd onClick={addToOrder}>Добавить</BtnAdd>
        </Content>
      </Modal>
    </Overlay>
  );
};
