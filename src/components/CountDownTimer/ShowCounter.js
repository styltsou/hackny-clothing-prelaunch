import * as React from 'react';
import styled from 'styled-components';

import { transparentGlass } from '../../styles/glass';

// ! This is not clean at all. Component hierachy should be different but this was a last minute call
import Newsletter from '../Newsletter';

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
  padding: 0 2rem;
  z-index: 100000;

  & h1 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 6rem;
    line-height: 100%;
  }

  & h3 {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    font-size: 2.5rem;
    line-height: 100%;
    margin-bottom: 0.7rem;
    line-height: 120%;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;

    & > span {
      display: flex;
      justify-content: center;

      &:first-child {
        justify-content: flex-start;
      }

      &:last-child {
        justify-content: flex-end;
      }
    }
  }
`;

const GlassWrapper = styled.div`
  width: 95rem;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 7rem;
  border-radius: var(--border-radius-medium);
  ${transparentGlass};

  /* @media only screen and (max-width: 815rem) {
    width: 70rem;
  } */
`;

const FractionFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--color-white);
  border-radius: var(--border-radius-medium);

  & h2 {
    font-size: 11rem;
    line-height: 100%;
    margin-bottom: 0.7rem;
  }

  & span {
    font-size: 2.5rem;
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
      <GlassWrapper>
        <h3>
          <span>Hackney</span>
          <span>Relaunch</span>
          <span>2023</span>
        </h3>
        <h1>
          <FractionComponent name="days" time={days} />
          <FractionComponent name="hours" time={hours} />
          <FractionComponent name="minutes" time={minutes} />
          <FractionComponent name="seconds" time={seconds} />
        </h1>
        <Newsletter />
      </GlassWrapper>
    </Flex>
  );
}
