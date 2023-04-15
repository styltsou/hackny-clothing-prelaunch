import { css } from 'styled-components';

export const transparentGlass = css`
  background-color: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(2rem);
`;

export const frostedGlass = css`
  background-color: rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(3rem);
`;
