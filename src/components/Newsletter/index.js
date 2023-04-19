import * as React from 'react';

import styled from 'styled-components';

import { frostedGlass } from '../../styles/glass';
import NewsletterInput from './NewsletterInput';

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  /* border-radius: var(--border-radius-medium); */
  /* ${frostedGlass}; */
  /* background-color: var(--color-black); */
  margin-top: 3rem;
`;

const H4 = styled.h4`
  color: var(--color-white);
  font-size: 3rem;
  margin-bottom: 3rem;
`;

function Newsletter() {
  return (
    <Flex>
      <H4>Join our Newsletter!</H4>
      <NewsletterInput />
    </Flex>
  );
}

export default Newsletter;
