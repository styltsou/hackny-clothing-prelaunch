import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Marquee from 'react-fast-marquee';

import Product from './Product';

export default function ProductsMarquee({ speed }) {
  return (
    <Marquee
      style={{ overflow: 'hidden', flex: '1' }}
      gradient={false}
      speed={speed || `60`}
    >
      <Product key="1">
        <StaticImage
          src="../../images/products/p1.png"
          alt="new-product"
          placeholder="blur"
        />
      </Product>
      <Product key="2">
        <StaticImage
          src="../../images/products/p2.png"
          alt="new-product"
          placeholder="blur"
        />
      </Product>
      <Product key="3">
        <StaticImage
          src="../../images/products/p3.png"
          alt="new-product"
          placeholder="blur"
        />
      </Product>
      <Product key="4">
        <StaticImage
          src="../../images/products/p4.png"
          alt="new-product"
          placeholder="blur"
        />
      </Product>
      <Product key="5">
        <StaticImage
          src="../../images/products/p5.png"
          alt="new-product"
          placeholder="blur"
        />
      </Product>
      <Product key="6">
        <StaticImage
          src="../../images/products/p6.png"
          alt="new-product"
          placeholder="blur"
        />
      </Product>
    </Marquee>
  );
}
