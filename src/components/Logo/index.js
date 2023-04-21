import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
`;

export default function Logo() {
  return (
    <Wrapper>
      <StaticImage
        src="../../images/logo.png"
        alt="hackney-logo"
        placeholder="blur"
      />
    </Wrapper>
  );
}
