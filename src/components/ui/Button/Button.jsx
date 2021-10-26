import { StyledButton } from "./style";

export const Button = (props) => {

  return (
    <StyledButton {...props} >
      {props.text}
    </StyledButton>
  );
};

