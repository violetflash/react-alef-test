import styled from 'styled-components/macro';

export const StyledHeader = styled.header`
  padding: 22px 50px;
  box-shadow: var(--shadow);
  
  @media (max-width: 992px) {
    padding: 22px 15px;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderLogoContainer = styled.div`
  margin-right: auto;
`;

export const NavContainer = styled.nav`
  position: absolute;
  
  @media (max-width: 564px) {
    position: relative;
  }
`;