import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
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

function NewsletterForm({ onSubmit }) {
  const [email, setEmail] = useState('');

  return (
    <Form>
      <Input
        placeholder="email@example.com"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <Button onClick={() => onSubmit(email)}>Join</Button>
    </Form>
  );
}

export default NewsletterForm;
