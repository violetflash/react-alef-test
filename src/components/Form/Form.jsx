import {useDispatch, useSelector} from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import {addChild} from "../../redux";
import {Fieldset, ButtonContainer, Legend, StyledForm} from "./styles";
import {Button, Input} from "../ui";
import { ChildField } from "../index";

export const Form = () => {
  const dispatch = useDispatch();
  const { childNum } = useSelector(state => state.data);

  const submitHandler = (e) => {
    e.preventDefault();
  }

  const addChildHandler = () => {
    dispatch(addChild());
  }

  const addChildButton = childNum < 5 ?
    <Button text="Добавить ребенка" secondary icon onClick={addChildHandler}/> : null;

  const childRows = childNum > 0 ?
    Array.from(Array(childNum).keys(), (_, i) => i + 1)
      .map((el) => {
        return <ChildField key={el} index={el}/>
    }) : null;

  return (
    <StyledForm onSubmit={submitHandler}>
      <AnimatePresence>
        <Fieldset
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut'  }}
        >
          <Legend>
            Персональные данные
          </Legend>
          <Input label="Имя" name="name"/>
          <Input label="Возраст" name="age"/>
        </Fieldset>
      </AnimatePresence>

      <Fieldset
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut'  }}
      >
        <Legend>
          Дети (макс. 5) - сейчас: {childNum}
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