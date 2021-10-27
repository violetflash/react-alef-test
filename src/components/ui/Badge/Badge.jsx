import React from 'react';
import { StyledBadge } from "./styles";

export const Badge = (props) => {
  const { children, text, ...properties } = props;
  return (
    <StyledBadge {...properties}>
      {text}
    </StyledBadge>
  )
};