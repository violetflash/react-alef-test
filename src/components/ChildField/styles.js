import styled from 'styled-components/macro';
import { motion } from 'framer-motion';

export const ChildContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  
  label {
    margin: 0;
    max-width: calc((100% - 96px) / 2);
  }
  
  &:last-child {
    margin: 0;
  }
`;

