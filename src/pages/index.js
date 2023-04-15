import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled, { ThemeProvider } from 'styled-components';

import theme from '../styles/theme';
import GlobalStyles from '../styles/global';

import CountDownTimer from '../components/CountDownTimer';

const LAUNCH_DATE = 'Mon May 01 2023 17:00:00 GMT+0300';

const Main = styled.main`
  display: grid;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 0;
  background-color: #2d53a6;
`;

const BgWrapper = styled.div`
  grid-area: 1/1;
`;

const ContentWrapper = styled.div`
  grid-area: 1/1;
`;

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        {/* <BgWrapper> */}
        <StaticImage
          src="../images/bg-desktop.jpg"
          alt=""
          placeholder="blurred"
          layout="fullWidth"
          style={{
            gridArea: '1/1',
          }}
          // objectFit="cover"
        />
        {/* </BgWrapper> */}
        <ContentWrapper>
          <CountDownTimer targetDate={LAUNCH_DATE} />
        </ContentWrapper>
      </Main>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default IndexPage;

export const Head = () => <title>Hackney Clothing</title>;
