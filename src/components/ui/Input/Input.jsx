import { StyledInput, Label, Placeholder } from "./styles";

export const Input = ({ label, name }) => {
  return (
    <Label>
      <Placeholder>
        {label}
      </Placeholder>
      <StyledInput name={name}/>
    </Label>
  )
};