import * as React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  max-height: 100%;
  display: flex;
  align-items: center;
  margin-right: 7rem;

  @media only screen and (max-width: 400px) {
    margin-right: 4rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  cursor: pointer;
  max-height: 100%;
  max-width: 100vw;
  display: inline-flex;
  aspect-ratio: 1;
`;

export default function Product({ children }) {
  return (
    <Wrapper>
      <ImageWrapper>{children}</ImageWrapper>
    </Wrapper>
  );
}
