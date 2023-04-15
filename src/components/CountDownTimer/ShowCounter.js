import * as React from 'react';
import styled from 'styled-components';

import { frostedGlass } from '../../styles/glass';

const Flex = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--color-white);
  backdrop-filter: blur(0rem);
  z-index: 100000;

  & h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 6rem;
    line-height: 100%;
  }

  & h3 {
    font-size: 4rem;
    line-height: 100%;
    margin-bottom: 3rem;
    line-height: 120%;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;

const FractionFlex = styled.div`
  width: 17rem;
  height: 17rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--color-white);
  padding: 2rem;
  border-radius: var(--border-radius-medium);
  /* ${frostedGlass}; */

  &:not(:last-child) {
    margin-right: 3rem;
  }

  & h2 {
    font-size: 8rem;
    line-height: 100%;
    margin-bottom: 0.7rem;
  }

  & span {
    font-size: 2.7rem;
    line-height: 100%;
    text-transform: uppercase;
  }

  @media only screen and (max-width: 785px) {
    width: 12rem;
    height: 12rem;

    & h2 {
      font-size: 6rem;
    }

    & span {
      font-size: 2rem;
    }
  }

  @media only screen and (max-width: 565px) {
    width: 8rem;
    height: 8rem;

    &:not(:last-child) {
      margin-right: 1.5rem;
    }

    & h2 {
      font-size: 3.5rem;
    }

    & span {
      font-size: 1.4rem;
    }
  }

  @media only screen and (max-width: 360px) {
    width: 6.8rem;
    height: 6.8rem;

    &:not(:last-child) {
      margin-right: 1.2rem;
    }

    & h2 {
      font-size: 3rem;
      margin-bottom: 0.4rem;
    }

    & span {
      font-size: 1.2rem;
    }
  }
`;

const FractionComponent = ({ name, time }) => {
  return (
    <FractionFlex>
      <h2>{time}</h2>
      <span>{name}</span>
    </FractionFlex>
  );
};

export default function CountDown({ days, hours, minutes, seconds }) {
  return (
    <Flex>
      <h3>Hackney Relaunch</h3>
      <h1>
        <FractionComponent name="days" time={days} />
        <FractionComponent name="hours" time={hours} />
        <FractionComponent name="minutes" time={minutes} />
        <FractionComponent name="seconds" time={seconds} />
      </h1>
    </Flex>
  );
}
