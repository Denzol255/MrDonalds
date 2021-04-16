import React from 'react';
import { ChoicesToppingWrapper } from '../Styled/ChoicesTopping';
import { ChoicesToppingLabel } from '../Styled/ChoicesTopping';
import { ChoicesToppingBtn } from '../Styled/ChoicesTopping';

export function Toppings({ toppings, checkToppings }) {
  return (
    <>
      <h3>Добавки</h3>
      <ChoicesToppingWrapper>
        {toppings.map((item, index) => (
          <ChoicesToppingLabel key={index}>
            <ChoicesToppingBtn
              type="checkbox"
              checked={item.checked}
              onChange={() => checkToppings(index)}
            />
            {item.name}
          </ChoicesToppingLabel>
        ))}
      </ChoicesToppingWrapper>
    </>
  );
}
