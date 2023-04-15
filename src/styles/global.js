import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  :focus {
    outline: none;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    font-family: Roboto, sans-serif;

    @media only screen and (max-width: 100em) {
      font-size: 60%;
    }
    @media only screen and (max-width: 80em) {
      font-size: 57.5%;
    }
    @media only screen and (max-width: 37.5em) {
      font-size: 55;
    }
  }

  body {
    box-sizing: inherit;
    font-weight: 400;
    line-height: 1.6rem;
    background-color: ${props => props.theme.colors.background};
    z-index: 0;
    scrollbar-width: thin;
    --side-drawer-width: 40rem;
    --collections-menu-width: 30rem;
    --shop-nav-width: 50rem;
    --cart-width: 25rem;
    --header-height: 8rem;
    --category-filter-height: 4.5rem;
    --body-spacing: 4.5rem;
    --body-spacing-smaller: 3rem;
    --body-spacing-smallest: 1.3rem;
    --color-primary: ${props => props.theme.colors.primary};
    --color-background: ${props => props.theme.colors.background};
    --color-ice-white: ${props => props.theme.colors.iceWhite};
    --color-text-light: ${props => props.theme.colors.textLight};
    --color-text-lighter: ${props => props.theme.colors.textLighter};
    --color-danger: ${props => props.theme.colors.danger};
    --color-grey: ${props => props.theme.colors.grey};
    --color-black: ${props => props.theme.colors.black};  
    --color-white: ${props => props.theme.colors.white};
    --border-radius-medium: ${props => props.theme.borderRadius.medium};

    @media only screen and (max-width: 1700px) {
      --shop-nav-width: 37rem;
    }

    @media only screen and (max-width: 860px) {
      --body-spacing: 2.5rem;
    }


    @media only screen and (max-width: 600px) {
      --category-filter-height: 4rem;
    }

    @media only screen and (max-width: 480px) {
      --side-drawer-width: 25rem;
      --cart-width: 25rem;
      --body-spacing: 1.5rem;
    }

    @media only screen and (max-width: 480px) {
      --side-drawer-width: 22rem;
      --cart-width: 22rem;
    }
  }

  body::-webkit-scrollbar {
    width: .7rem;
  }

  body::-webkit-scrollbar-track {
    background: var(--color-background);
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(--color-black);
  }
  
  a,
  input,
  button {
    cursor: pointer;
    outline: none;
    text-decoration: none;
    font-family: inherit;
  } 
`;
