import React from 'react';
import { ChoicesToppingWrapper } from '../Styled/ChoicesTopping';
import { ChoicesToppingLabel } from '../Styled/ChoicesTopping';
import { ChoicesToppingBtn } from '../Styled/ChoicesTopping';

export function Choices({ openItem, choice, changeChoices }) {
  return (
    <>
      <h3>Выберите:</h3>
      <ChoicesToppingWrapper>
        {openItem.choices.map((item, index) => (
          <ChoicesToppingLabel key={index}>
            <ChoicesToppingBtn
              type="radio"
              name="choices"
              checked={choice === item}
              value={item}
              onChange={changeChoices}
            />
            {item}
          </ChoicesToppingLabel>
        ))}
      </ChoicesToppingWrapper>
    </>
  );
}
