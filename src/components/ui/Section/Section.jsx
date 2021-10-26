import React from 'react';
import { StyledSection } from "./styles";

export const Section = ({children}) => {
  return (
    <StyledSection >
      <div className="container">
        {children}
      </div>
    </StyledSection>
  )
};