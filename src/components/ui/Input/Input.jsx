import { StyledInput, Label, Placeholder } from "./styles";

export const Input = ({ label, name, value, onChange = Function.prototype, error = false }) => {
  return (
    <Label error={error}>
      <Placeholder>
        {label}
      </Placeholder>
      <StyledInput name={name} value={value} onChange={onChange}/>
    </Label>
  )
};
