import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { FaBars, FaTimes } from 'react-icons/fa';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: ${({ scrolled, theme }) => 
    scrolled ? theme.colors.light : 'rgba(255, 255, 255, 0.9)'};
  box-shadow: ${({ scrolled, theme }) => 
    scrolled ? theme.shadows.medium : 'none'};
  transition: all ${({ theme }) => theme.transitions.medium};
  padding: ${({ scrolled, theme }) => 
    scrolled ? theme.spacing.sm : theme.spacing.md} 0;
`;

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  transition: color ${({ theme }) => theme.transitions.short};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 70%;
    max-width: 300px;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.light};
    flex-direction: column;
    justify-content: flex-start;
    padding-top: ${({ theme }) => theme.spacing.xxl};
    transition: right ${({ theme }) => theme.transitions.medium};
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    width: 100%;
  }
`;

const NavItem = styled.li`
  margin: 0 ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: ${({ theme }) => theme.spacing.xs} 0;
    width: 100%;
    text-align: center;
  }
`;

const NavLinkStyled = styled(NavLink)`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 500;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  transition: all ${({ theme }) => theme.transitions.short};
  
  &:hover, &.active {
    color: ${({ theme }) => theme.colors.primary};
    background-color: rgba(217, 68, 70, 0.1);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    color: ${({ theme }) => theme.colors.textPrimary};
    display: block;
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  cursor: pointer;
  z-index: 1001;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  cursor: pointer;
  display: none;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

const ButtonContainer = styled.div`
  margin-left: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: ${({ theme }) => theme.spacing.lg} 0 0;
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <StyledHeader scrolled={scrolled}>
      <HeaderContainer>
        <Logo to="/">
          Naturlich
        </Logo>
        
        <MobileMenuButton onClick={toggleMenu}>
          <FaBars />
        </MobileMenuButton>
        
        <Nav isOpen={isMenuOpen}>
          <CloseButton onClick={closeMenu}>
            <FaTimes />
          </CloseButton>
          
          <NavList>
            <NavItem>
              <NavLinkStyled to="/" onClick={closeMenu}>
                Home
              </NavLinkStyled>
            </NavItem>
            <NavItem>
              <NavLinkStyled to="/about" onClick={closeMenu}>
                About
              </NavLinkStyled>
            </NavItem>
            <NavItem>
              <NavLinkStyled to="/products" onClick={closeMenu}>
                Products
              </NavLinkStyled>
            </NavItem>
            <NavItem>
              <NavLinkStyled to="/sustainability" onClick={closeMenu}>
                Sustainability
              </NavLinkStyled>
            </NavItem>
            <NavItem>
              <NavLinkStyled to="/contact" onClick={closeMenu}>
                Contact
              </NavLinkStyled>
            </NavItem>
          </NavList>
          
          <ButtonContainer>
            <Button as={Link} to="/shop" onClick={closeMenu}>
              Shop Now
            </Button>
          </ButtonContainer>
        </Nav>
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
