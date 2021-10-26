
import { StyledLink, StyledLogo } from "./styles";
import logo from './icons/logo.svg';

export const Logo = () => {
  return (
    <StyledLink to="/form">
      <StyledLogo src={logo} alt="alef development"/>
    </StyledLink>
  )
};

export default Logo;