import * as React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Div = styled(motion.div)`
  position: absolute;
  left: 0;
  bottom: 0;
  transform: translateY(100%);
  font-size: 1.6rem;
  color: var(--color-danger);
  line-height: 100%;
  margin-top: 1.5rem;
`;

const variants = {
  enter: {
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
};

export default function Error({ children }) {
  return (
    <Div variants={variants} initial="enter" animate="animate" exit="exit">
      {children}
    </Div>
  );
}
