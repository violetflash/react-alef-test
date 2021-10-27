import { useDispatch, useSelector } from 'react-redux';
import { deleteChild, setChild } from "../../redux";
import { ChildContainer } from "./styles";
import { Button, Input } from "../ui";

export const ChildField = ({ id }) => {
  const dispatch = useDispatch();
  const { child } = useSelector(state => state.inputsData);
  const field = child.filter(el => el.id === id)[0];

  if (!field) return null;

  const deleteChildHandler = (id) => dispatch(deleteChild(id));


  const setChildHandler = (e, id) => {
    dispatch(setChild({ id, name: e.target.name, inputValue: e.target.value }))
  }

  return (
    <ChildContainer
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0, transition: { duration: 0.2 } }}
    >
      <Input label="Имя" name="name" value={field.name} onChange={(e) => setChildHandler(e, id)}/>
      <Input label="Возраст" name="age" value={field.age} onChange={(e) => setChildHandler(e, id)}/>
      <Button text="удалить" flat onClick={() => deleteChildHandler(id)}/>
    </ChildContainer>
  )
};
