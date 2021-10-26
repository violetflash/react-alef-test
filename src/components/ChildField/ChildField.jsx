import { ChildContainer } from "./styles";
import { Button, Input } from "../ui";


export const ChildField = ({ index }) => {
  console.log(index);
  return (
    <ChildContainer
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
    >
      <Input label="Имя" name={'name' + index}/>
      <Input label="Возраст" name={'age' + index}/>
      <Button text="удалить" flat/>
    </ChildContainer>
  )
};