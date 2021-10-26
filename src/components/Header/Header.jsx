import { Logo } from "../index";
import {HeaderContent, HeaderLogoContainer, NavContainer, StyledHeader} from "./styles";
import { Nav } from "./Nav/Nav";

export const Header = () => {
  return (
    <StyledHeader>
      <div className="container">
        <HeaderContent>
          <HeaderLogoContainer>
            <Logo/>
          </HeaderLogoContainer>
          <NavContainer>
            <Nav/>
          </NavContainer>
        </HeaderContent>
      </div>


    </StyledHeader>

  )

};

export default Header;