import React from 'react';
import styled from 'styled-components';

const ToppingWrapper = styled.div`
  max-width: 500px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
`;

const ToppingLabel = styled.label`
  min-width: 150px;
  flex: 0 0 45%;
  cursor: pointer;
  &:nth-child(odd) {
    margin-right: 10px;
  }
`;

const ToppingCheckbox = styled.input`
  cursor: pointer;
  margin-right: 5px;
`;

export function Toppings({ toppings, checkToppings }) {
  return (
    <>
      <h3>Добавки</h3>
      <ToppingWrapper>
        {toppings.map((item, index) => (
          <ToppingLabel key={index}>
            <ToppingCheckbox
              type="checkbox"
              checked={item.checked}
              onChange={() => checkToppings(index)}
            />
            {item.name}
          </ToppingLabel>
        ))}
      </ToppingWrapper>
    </>
  );
}
