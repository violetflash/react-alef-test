import styled from 'styled-components/macro';
import { css } from 'styled-components';


export const StyledButton = styled.button`
  padding: 8px 18px;
  border: 2px solid transparent;
  border-radius: var(--b-radius-button);
  color: ${props => props.color || 'var(--main-color)'};
  font-size: var(--fz-normal);
  line-height: var(--lh);
  transition: all 0.3s ease;
  cursor: pointer;

  ${props => props.primary && css`
    background-color: var(--accent-color);
    color: var(--white);
    
    &:hover {
      background-color: var(--primary-hover);
    }
    
    &:active {
      background-color: var(--primary-active);
    }
    
    &:focus {
      border: var(--primary-focus-border);
    }
  `}
  
  
  
  ${props => props.danger && css`
    background-color: darksalmon;
    
    &:hover {
      background-color: #ec7856;
    }
  `}

  ${props => props.secondary && css`
    background-color: transparent;
    color: var(--accent-color);
    border: 2px solid var(--accent-color);

    &:hover {
      background-color: var(--secondary-hover);
    }

    &:active {
      background-color: var(--secondary-active);
    }

    &:focus {
      border: var(--secondary-focus-border);
    }
  `}

  ${props => props.flat && css`
    padding: 0;
    color: var(--accent-color);
    background-color: transparent;
    border: none;
  `}

  ${props => props.icon && css`
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
