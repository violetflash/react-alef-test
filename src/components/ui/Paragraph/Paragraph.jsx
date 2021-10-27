import React from 'react';
import { StyledParagraph } from "./styles";

export const Paragraph = props => {
  const { text, ...properties } = props;
  return (
    <StyledParagraph {...properties}>
      {text}
    </StyledParagraph>
  )
};