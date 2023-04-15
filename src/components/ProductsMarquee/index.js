import * as React from 'react';
import Marquee from 'react-fast-marquee';

import Product from './Product';

const PRODUCTS = [
  {
    id: 1,
    imageSrc: '',
  },
  {
    id: 2,
    imageSrc: '',
  },
  {
    id: 3,
    imageSrc: '',
  },
  {
    id: 4,
    imageSrc: '',
  },
];

export default function ProductsMarquee({ speed }) {
  return (
    <Marquee
      style={{ overflow: 'hidden', flex: '1' }}
      gradient={false}
      speed={speed || `40`}
    >
      {PRODUCTS.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </Marquee>
  );
}
