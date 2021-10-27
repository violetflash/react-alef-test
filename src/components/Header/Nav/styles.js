import styled from 'styled-components/macro';


export const NavList = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const NavElement = styled.li`
  color: ${props => props.active ? 'var(--accent-color)' : 'var(--nav-links-color)'};
  margin: 0 12px;
  font-size: 14px;
  transition: all 0.3s ease;
`;