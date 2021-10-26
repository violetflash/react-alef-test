import React from 'react';
import {Fieldset, ButtonContainer, Legend, StyledForm} from "./styles";
import {Button, Input} from "../ui";
import {AddChildField} from "../AddChildField/AddChildField";

export const Form = () => {
  return (
    <StyledForm>
      <Fieldset>
        <Legend>
          Персональные данные
        </Legend>
        <Input label="Имя" name="name"/>
        <Input label="Возраст" name="age"/>
      </Fieldset>
      <Fieldset>
        <Legend>
          Дети (макс. 5)
        </Legend>
        <ButtonContainer>
          <Button text="Добавить ребенка" outlined add/>
        </ButtonContainer>
        <AddChildField index={2}/>
      </Fieldset>
      <Button text="Сохранить"/>
    </StyledForm>
  )
};