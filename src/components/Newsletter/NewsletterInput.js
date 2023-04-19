import * as React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  aling-items: center;
  width: 50rem;
  max-width: 100%;

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

function NewsletterInput() {
  return (
    <InputWrapper>
      <Input type="email" />
      <Button>Join</Button>
    </InputWrapper>
  );
}

export default NewsletterInput;
