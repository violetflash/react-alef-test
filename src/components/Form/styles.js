import styled from 'styled-components/macro';

export const StyledForm = styled.form`
  margin: 0;
  width: 100%;
`;

export const Fieldset = styled.fieldset`
  position: relative;
  margin: 0 0 44px;
  padding: 0;
  border: none;
  
  &:last-child {
    margin: 0 0 30px;
  }
`;


export const ButtonContainer = styled.div`
  position: absolute;
  right: 0;
  top: -53px;
  //bottom: 0;
`;

export const Legend = styled.legend`
  display: inline-block;
  margin: 0 0 20px;
  padding: 0;
  font-weight: var(--fw-strong);
  font-size: var(--fz-accent);
`;