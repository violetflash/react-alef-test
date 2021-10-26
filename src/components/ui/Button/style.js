import styled from 'styled-components/macro';
import { css } from 'styled-components';


export const StyledButton = styled.button`
  padding: 8px 18px;
  border: 2px solid transparent;
  border-radius: var(--b-radius-button);
  background-color: var(--accent-color);
  color: ${props => props.color || 'var(--white)'};
  font-size: var(--fz-normal);
  line-height: var(--lh);
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  cursor: pointer;
  
  ${props => props.danger && css`
    background-color: darksalmon;
    
    &:hover {
      background-color: #ec7856;
    }
  `}

  ${props => props.outlined && css`
    background-color: transparent;
    color: var(--accent-color);
    border: 2px solid var(--accent-color);
  `}

  ${props => props.anchor && css`
    padding: 0;
    color: var(--accent-color);
    background-color: transparent;
    border: none;
  `}

  ${props => props.add && css`
    position: relative;
    display: flex;
    align-items: center;
    
    padding-left: 48px;
    
    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 20px;
      width: 16px;
      height: 2px;
      border-radius: 2px;
      background-color: var(--accent-color);
    }

    &::after {
      transform: rotate(90deg);
    }
  `}
`;
