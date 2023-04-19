import * as React from 'react';
import { useState } from 'react';

import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';

import Error from './Error';

const Form = styled.form`
  position: relative;
  display: flex;
  aling-items: center;
  width: 100%;

  & > * {
    padding: 1.5rem 3rem;
  }
`;

const Input = styled.input`
  flex: 1;
  border: none;
  border-radius: 10rem 0 0 10rem;
  background-color: var(--color-white);
  color: var(--color-black);
  font-size: 2rem;
`;

const Button = styled.button`
  color: var(--color-white);
  background-color: var(--color-black);
  font-size: 1.7rem;
  border: none;
  border-radius: 0 10rem 10rem 0;
  display: flex;
  justify-contet: center;
  align-items: center;
  line-height: 100%;
  text-transform: uppercase;
`;

function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setError('Invalid email address!');
    setEmail('');
  };

  return (
    <Form>
      <Input
        placeholder="email@example.com"
        value={email}
        onChange={e => {
          setError(null);
          setEmail(e.target.value);
        }}
      />
      <Button onClick={handleSubmit}>Join</Button>
      <AnimatePresence>{error && <Error>{error}</Error>}</AnimatePresence>
    </Form>
  );
}

export default NewsletterForm;
