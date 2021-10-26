import { AddChildContainer } from "./styles";
import {Button, Input} from "../ui";


export const AddChildField = ({ index }) => {
  return (
    <AddChildContainer>
      <Input label="Имя" name={'name' + index}/>
      <Input label="Возраст" name={'age' + index}/>
      <Button text="удалить" anchor/>
    </AddChildContainer>
  )
};