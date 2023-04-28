import * as React from 'react';
import { useState } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';

import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';

import Loader from '../Loader';
import schema from './validationSchema';
import SuccessMessage from './SuccessMessage';
import Error from './Error';

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Form = styled.form`
  position: relative;
  display: flex;
  aling-items: center;
  width: 100%;

  & > * {
    padding: 1rem 3rem;
  }

  @media only screen and (max-width: 580px) {
    & > * {
      padding: 1rem 2rem;
    }
  }

  @media only screen and (max-width: 370px) {
    & > * {
      padding: 1rem;
    }
  }
`;

const Input = styled.input`
  flex: 1;
  border: none;
  border-radius: 10rem 0 0 10rem;
  background-color: var(--color-white);
  color: var(--color-black);
  font-size: 1.8rem;

  @media only screen and (max-width: 580px) {
    font-size: 1.5rem;
  }
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

  @media only screen and (max-width: 580px) {
    font-size: 1.4rem;
  }

  &:active {
    background-color: var(--color-black);
    color: var(--color-white);
  }
`;

function NewsletterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const submitForm = async data => {
    setSuccessMessage(null);
    setIsLoading(true);

    try {
      const addContactRes = await axios.post('/api/waitlist', {
        email: data.email,
      });
      
      setIsLoading(false);
      setSuccessMessage('Joined the waitlist successfully!');
      reset({ email: '' });
    } catch (e) {
      setIsLoading(false);
      setServerError('Oops! Something went wrong');
      console.log(e);
    }
  };

  return (
    <Column>
      <Form onSubmit={handleSubmit(submitForm)}>
        <Input
          {...register('email')}
          onChange={() => {
            if (successMessage) setSuccessMessage(null);
          }}
          placeholder="your@email.com"
        />
        <Button
          type="submit"
          onClick={() => {
            setServerError(null);
            setSuccessMessage(null);
          }}
        >
          Submit
        </Button>
        <AnimatePresence>
          {errors.email?.message && <Error>{errors.email?.message}</Error>}
          {serverError && <Error>{serverError}</Error>}
          {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
        </AnimatePresence>
      </Form>
        {isLoading && <Loader />}
   <Column/>
  );
}

export default NewsletterForm;
