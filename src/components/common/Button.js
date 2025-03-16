import styled, { css } from 'styled-components';

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 600;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  transition: all ${({ theme }) => theme.transitions.short};
  border: none;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  
  ${({ variant = 'primary', theme }) => {
    switch (variant) {
      case 'primary':
        return css`
          background-color: ${theme.colors.primary};
          color: ${theme.colors.light};
          
          &:hover, &:focus {
            background-color: ${theme.colors.primaryDark};
          }
        `;
      case 'secondary':
        return css`
          background-color: ${theme.colors.secondary};
          color: ${theme.colors.light};
          
          &:hover, &:focus {
            background-color: ${theme.colors.secondaryDark};
          }
        `;
      case 'outline':
        return css`
          background-color: transparent;
          color: ${theme.colors.primary};
          border: 2px solid ${theme.colors.primary};
          
          &:hover, &:focus {
            background-color: ${theme.colors.primary};
            color: ${theme.colors.light};
          }
        `;
      case 'text':
        return css`
          background-color: transparent;
          color: ${theme.colors.primary};
          padding: ${theme.spacing.xs} ${theme.spacing.sm};
          
          &:hover, &:focus {
            background-color: rgba(250, 80, 83, 0.1);
          }
        `;
      default:
        return css`
          background-color: ${theme.colors.primary};
          color: ${theme.colors.light};
          
          &:hover, &:focus {
            background-color: ${theme.colors.primaryDark};
          }
        `;
    }
  }}
  
  ${({ size = 'medium', theme }) => {
    switch (size) {
      case 'small':
        return css`
          padding: ${theme.spacing.xs} ${theme.spacing.md};
          font-size: ${theme.fontSizes.small};
        `;
      case 'large':
        return css`
          padding: ${theme.spacing.md} ${theme.spacing.xl};
          font-size: ${theme.fontSizes.large};
        `;
      default:
        return css`
          padding: ${theme.spacing.sm} ${theme.spacing.lg};
          font-size: ${theme.fontSizes.medium};
        `;
    }
  }}
  
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
