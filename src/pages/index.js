import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled, { ThemeProvider } from 'styled-components';

import theme from '../styles/theme';
import GlobalStyles from '../styles/global';

import CountDownTimer from '../components/CountDownTimer';

const LAUNCH_DATE = 'Mon May 01 2023 17:00:00 GMT+0300';

const Main = styled.main`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 0;
  background-color: #2d53a6;
`;

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <StaticImage
          src="../images/bg-desktop.jpg"
          alt="bacgkround"
          placeholder="blurred"
          // layout="fullWidth"
          objectFit="cover"
        />
        <CountDownTimer targetDate={LAUNCH_DATE} />
      </Main>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default IndexPage;

export const Head = () => <title>Hackney Clothing</title>;
