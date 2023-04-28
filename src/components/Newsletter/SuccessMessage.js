import * as React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Div = styled(motion.div)`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  transform: translateY(120%);
  font-size: 2rem;
  font-weight: 400;
  color: var(--color-white);
  line-height: 100%;
  text-align: center;

  @media only screen and (max-width: 815px) {
    font-size: 1.8rem;
    transform: translateY(100%);
  }
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

export default function SuccessMessage({ children }) {
  return (
    <Div variants={variants} initial="enter" animate="animate" exit="exit">
      {children}
    </Div>
  );
}
