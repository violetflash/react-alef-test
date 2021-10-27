import { StyledInput, Label, Placeholder } from "./styles";

export const Input = ({ label, name, value, onChange = Function.prototype }) => {
  return (
    <Label>
      <Placeholder>
        {label}
      </Placeholder>
      <StyledInput name={name} value={value} onChange={onChange}/>
    </Label>
  )
};
