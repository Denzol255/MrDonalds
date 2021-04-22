import React from 'react';
import styled from 'styled-components';
import { Overlay } from '../Styled/Overlay';
import tyImg from '../image/giphy.gif';

const ThxModal = styled.div`
  width: 480px;
  height: 480px;
  background-image: url(${tyImg});
  border-radius: 15px;
`;

export const ThxMessage = () => {
  return (
    <Overlay>
      <ThxModal></ThxModal>
    </Overlay>
  );
};
