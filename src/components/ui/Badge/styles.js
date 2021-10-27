import styled from 'styled-components/macro';
import { css } from 'styled-components';

export const StyledBadge = styled.span`
  margin: 0 0 20px;
  padding: 10px 20px;
  color: var(--black);
  background-color: var(--input-border-color);
  font-size: var(--fz-accent);
  font-weight: var(--fw-bold);
  border-radius: 5px;
  
  ${props => props.flat && css`
    padding: 0;
    background-color: transparent;
  `}
  
  &:last-child {
    margin: 0;
  }
`;

