import styled from 'styled-components/macro';
import { css } from 'styled-components';

export const StyledParagraph = styled.p`
  margin: ${props => props.margin || '0 0 20px'};
  padding: 0;
  
  ${props => props.medium && css`
    font-size: var(--fz-accent);
    font-weight: var(--fw-medium);
  `}
`;