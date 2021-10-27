
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { nanoid } from 'nanoid';
import { addChild, setPerson, setPreviewData, setErrors, clearError } from "../../redux";
import { Fieldset, ButtonContainer, Legend, StyledForm } from "./styles";
import { Button, Input } from "../ui";
import { ChildField } from "../index";
import { checkInputs, validateInput } from "../../utils/functions";

export const Form = () => {
  const dispatch = useDispatch();
  const { person, child, errors } = useSelector(state => state.inputsData);


  const submitHandler = (e) => {
    e.preventDefault();

    const err = checkInputs(person);

    if (err.length) {
      dispatch(setErrors(err));
      return;
    }

    dispatch(setPreviewData({ person, child }));
  }

  const addChildHandler = (e) => {
    e.preventDefault();
    dispatch(addChild({ id: nanoid(), name: "", age: "" }));
  }

  const personChangeHandler = (e) => {
    const inputValue = validateInput(e);

    dispatch(setPerson({ name: e.target.name, inputValue }))
  };

  const focusHandler = (e) => {
    if (errors.some(err => err === e.target.name)) {
      dispatch(clearError(e.target.name));
    }
  };

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
        <Input
          label="Имя"
          name="name"
          value={person.name}
          error={errors.some(err => err === 'name')}
          onChange={personChangeHandler}
          onFocus={focusHandler}
        />
        <Input
          label="Возраст"
          error={errors.some(err => err === 'age')}
          name="age"
          value={person.age}
          onChange={personChangeHandler}
          onFocus={focusHandler}
        />
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
