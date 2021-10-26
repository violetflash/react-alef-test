import styled from 'styled-components/macro';

export const Label = styled.label`
  display: block;
  margin: 0 0 10px;
  padding: 8px 16px 6px 16px;
  border: 1px solid var(--input-border-color);
  border-radius: var(--b-radius-input);
  width: 100%;
  
  &:last-child {
    margin: 0;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  border: none;
`;

export const Placeholder = styled.span`
  display: block;
  border: none;
  color: var(--main-color-light);
  font-size: var(--fz-small);
  line-height: 16px;
`;