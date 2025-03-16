import styled, { css } from 'styled-components';

export const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  
  ${({ bgColor, theme }) => bgColor && css`
    background-color: ${theme.colors[bgColor] || bgColor};
  `}
  
  ${({ bgImage }) => bgImage && css`
    background-image: url(${bgImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  `}
  
  ${({ fullHeight }) => fullHeight && css`
    min-height: 100vh;
    display: flex;
    align-items: center;
  `}
`;
