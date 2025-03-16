import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    color: ${({ theme }) => theme.colors.textPrimary};
    background-color: ${({ theme }) => theme.colors.background};
    line-height: 1.6;
    overflow-x: hidden;
    font-size: 1.1rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    line-height: 1.3;
    font-weight: 600;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.xxxlarge};
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.xlarge};
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    transition: color ${({ theme }) => theme.transitions.short};
    
    &:hover {
      color: ${({ theme }) => theme.colors.primaryDark};
    }
  }

  button {
    font-family: ${({ theme }) => theme.fonts.body};
    cursor: pointer;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ul, ol {
    margin-left: ${({ theme }) => theme.spacing.lg};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  section {
    padding: ${({ theme }) => theme.spacing.xxl} 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    h1 {
      font-size: ${({ theme }) => theme.fontSizes.xxlarge};
    }

    h2 {
      font-size: ${({ theme }) => theme.fontSizes.xlarge};
    }

    h3 {
      font-size: ${({ theme }) => theme.fontSizes.large};
    }
  }
`;
