import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '../common/Container';
import { Button } from '../common/Button';

const HeroSection = styled.section`
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
    url('/images/hero-strawberries.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  position: relative;
  color: ${({ theme }) => theme.colors.light};
`;

const HeroContent = styled.div`
  max-width: 650px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: center;
    margin: 0 auto;
  }
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.light};
  
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 3rem;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  max-width: 80%;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 100%;
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <HeroContent>
          <HeroTitle>
            Naturally <span>Sweet</span>, Naturally <span>Grown</span>
          </HeroTitle>
          <HeroSubtitle>
            Premium organic strawberries grown with love and care for the environment.
            Experience the natural sweetness of our berries.
          </HeroSubtitle>
          <ButtonGroup>
            <Button as={Link} to="/shop" size="large">
              Shop Now
            </Button>
            <Button as={Link} to="/about" variant="outline" size="large">
              Learn More
            </Button>
          </ButtonGroup>
        </HeroContent>
      </Container>
    </HeroSection>
  );
};

export default Hero;
