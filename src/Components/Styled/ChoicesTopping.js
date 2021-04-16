import styled from 'styled-components';

export const ChoicesToppingWrapper = styled.div`
  max-width: 500px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
`;

export const ChoicesToppingLabel = styled.label`
  min-width: 150px;
  flex: 0 0 45%;
  cursor: pointer;
  &:nth-child(odd) {
    margin-right: 10px;
  }
`;

export const ChoicesToppingBtn = styled.input`
  cursor: pointer;
  margin-right: 5px;
`;
