import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { nanoid } from 'nanoid';
import { addChild, setPerson, setPreviewData } from "../../redux";
import { Fieldset, ButtonContainer, Legend, StyledForm } from "./styles";
import { Button, Input } from "../ui";
import { ChildField } from "../index";
import { checkInputs } from "../../utils/functions";

export const Form = () => {
  const dispatch = useDispatch();
  const { person, child } = useSelector(state => state.inputsData);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!checkInputs(person)) return;

    dispatch(setPreviewData({ person, child }));
  }

  const addChildHandler = () => {
    dispatch(addChild({ id: nanoid(), name: "", age: "" }));
  }

  const personChangeHandler = (e) => {
    dispatch(setPerson({ name: e.target.name, inputValue: e.target.value }))
  }

  const addChildButton = child.length < 5 ?
    <Button text="Добавить ребенка" secondary icon onClick={addChildHandler}/> : null;

  const childRows = child.length > 0 ?
    child.map(el => {
      return <ChildField key={el.id} id={el.id}/>
    }) : null;

  return (
    <StyledForm onSubmit={submitHandler}>
      <Fieldset>
        <Legend>
          Персональные данные
        </Legend>
        <Input label="Имя" name="name" value={person.name} onChange={personChangeHandler}/>
        <Input label="Возраст" name="age" value={person.age} onChange={personChangeHandler}/>
      </Fieldset>
      <Fieldset>
        <Legend>
          Дети: {child.length} (макс. 5)
        </Legend>
        <ButtonContainer>
          {addChildButton}
        </ButtonContainer>
        <AnimatePresence initial={false}>
          {childRows}
        </AnimatePresence>
      </Fieldset>
      <Button text="Сохранить" primary/>
    </StyledForm>
  )
};
