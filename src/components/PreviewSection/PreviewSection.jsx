import React from 'react';
import { StyledPreviewElement } from "./styles";
import {Paragraph} from "../ui/Paragraph/Paragraph";

export const PreviewSection = ({ text, children }) => {
  return (
    <StyledPreviewElement>
      <Paragraph medium text={text}/>
      {children}
    </StyledPreviewElement>
  )
};