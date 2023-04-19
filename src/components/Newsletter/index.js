import * as React from 'react';
import styled from 'styled-components';

import { frostedGlass } from '../../styles/glass';
import NewsletterForm from './NewsletterInput';

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  margin-top: 3rem;
  width: 55rem;
  max-width: 100%;
  /* ${frostedGlass}; */
`;

const H4 = styled.h4`
  color: var(--color-white);
  font-size: 3rem;
  margin-bottom: 3rem;
  line-height: 120%;
  text-align: center;
`;

function Newsletter() {
  return (
    <Flex>
      <H4>Join the waitlist and get free shipping</H4>
      <NewsletterForm />
    </Flex>
  );
}

export default Newsletter;
