import styled from 'styled-components/macro';
import { css } from 'styled-components';

export const Label = styled.label`
  display: block;
  margin: 0 0 10px;
  padding: 8px 16px 6px 16px;
  border: 1px solid var(--input-border-color);
  border-radius: var(--b-radius-input);
  width: 100%;
  transition: all 0.3s;
  
  &:last-child {
    margin: 0;
  }
  
  ${props => props.error && css`
    background-color: var(--input-error-color);
  `}
  
`;

export const StyledInput = styled.input`
  width: 100%;
  border: none;
  background-color: inherit;
`;

export const Placeholder = styled.span`
  display: block;
  border: none;
  color: var(--main-color-light);
  font-size: var(--fz-small);
  line-height: 16px;
`;
