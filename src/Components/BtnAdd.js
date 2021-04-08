import styled from 'styled-components';

export const BtnAdd = styled.button`
  display: block;
  width: 250px;
  height: 65px;
  font-size: 21px;
  line-height: 25px;
  background-color: #299b01;
  border: 1px solid transparent;
  color: #ffffff;
  margin: 0 auto;
  transition-property: color, border-color, background-color;
  transition-duration: 0.3;
  &:hover {
    background-color: #fff;
    border-color: #299b01;
    color: #299b01;
  }
`;
