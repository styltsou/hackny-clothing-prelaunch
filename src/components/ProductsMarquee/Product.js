import * as React from 'react';
import StaticImage from 'gatsby-plugin-image';

import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 10rem;

  @media only screen and (max-width: 400px) {
    margin-right: 5rem;
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

export default function Product({ imageSrc }) {
  return (
    <Wrapper>
      <ImageWrapper>
        <StaticImage src={imageSrc} alt="new-product" placeholder="blur" />
      </ImageWrapper>
    </Wrapper>
  );
}
