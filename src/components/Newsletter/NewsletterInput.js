import * as React from 'react';
import { useState } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';

import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';

import schema from './validationSchema';
import SuccessMessage from './SuccessMessage';
import Error from './Error';

const Form = styled.form`
  position: relative;
  display: flex;
  aling-items: center;
  width: 100%;

  & > * {
    padding: 1rem 3rem;
  }
`;

const Input = styled.input`
  flex: 1;
  border: none;
  border-radius: 10rem 0 0 10rem;
  background-color: var(--color-white);
  color: var(--color-black);
  font-size: 1.8rem;
`;

const Button = styled.button`
  color: var(--color-black);
  background-color: var(--color-white);
  font-size: 1.7rem;
  font-weight: 700;
  border: none;
  border-radius: 0 10rem 10rem 0;
  display: flex;
  justify-contet: center;
  align-items: center;
  line-height: 100%;
  text-transform: uppercase;
  transition: 0.2s all ease-out;

  &:active {
    background-color: var(--color-black);
    color: var(--color-white);
  }
`;

function NewsletterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [successMessage, setSuccessMessage] = useState(null);

  const submitForm = async data => {
    console.log(data.email);
    setSuccessMessage('Joined the waitlist successfully!');
  };

  return (
    <Form onSubmit={handleSubmit(submitForm)}>
      <Input
        {...register('email')}
        onChange={() => {
          if (successMessage) setSuccessMessage(null);
        }}
        placeholder="email@example.com"
      />
      <Button type="submit">Submit</Button>
      <AnimatePresence>
        {errors.email?.message && <Error>{errors.email?.message}</Error>}
        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
      </AnimatePresence>
    </Form>
  );
}

export default NewsletterForm;
