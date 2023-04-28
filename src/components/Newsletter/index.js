import * as React from 'react';
import styled from 'styled-components';

import DotPulseLoader from './Loader'
import NewsletterForm from './NewsletterInput';

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4.5rem;
  width: 55rem;
  max-width: 100%;
`;

const H4 = styled.h4`
  color: var(--color-white);
  font-size: 2.2rem;
  margin-bottom: 1rem;
  line-height: 120%;
  text-align: center;
  text-transform: uppercase;

  @media only screen and (max-width: 785px) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 620px) {
    font-size: 1.8rem;
  }

  @media only screen and (max-width: 420px) {
    font-size: 1.6rem;
  }
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
