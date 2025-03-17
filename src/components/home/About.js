import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Button } from '../common/Button';

const AboutContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xxl};
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const AboutContent = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    order: 2;
  }
`;

const AboutTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const AboutText = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

const AboutImageContainer = styled.div`
  position: relative;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    order: 1;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
`;

const AboutImage = styled.img`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.large};
`;

const AboutImageAccent = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.tertiary};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  z-index: -1;
  
  &.top-left {
    top: -20px;
    left: -20px;
  }
  
  &.bottom-right {
    bottom: -20px;
    right: -20px;
    background-color: ${({ theme }) => theme.colors.secondary};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100px;
    height: 100px;
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  margin: ${({ theme }) => theme.spacing.lg} 0;
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const About = () => {
  return (
    <Section bgColor="gray">
      <AboutContainer>
        <AboutContent>
          <AboutTitle>
            Our <span>Strawberry</span> Story
          </AboutTitle>
          <AboutText>
            Founded in 2010, Naturlich began with a simple mission: to grow the most delicious, 
            organic strawberries while respecting nature and supporting local communities.
          </AboutText>
          <AboutText>
            Today, our family-owned farm spans over 200 acres of fertile land where we cultivate 
            various strawberry varieties using sustainable farming practices. We believe that 
            the best strawberries come from healthy soil, clean water, and lots of love.
          </AboutText>
          
          <Stats>
            <StatItem>
              <StatNumber>15+</StatNumber>
              <StatLabel>Years Experience</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>200</StatNumber>
              <StatLabel>Acres Farm</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>12</StatNumber>
              <StatLabel>Strawberry Varieties</StatLabel>
            </StatItem>
          </Stats>
          
          <Button as={Link} to="/about">
            Learn More About Us
          </Button>
        </AboutContent>
        
        <AboutImageContainer>
          <AboutImage src={process.env.PUBLIC_URL + "/images/strawberry-farm.jpg"} alt="Naturlich strawberry farm" />
          <AboutImageAccent className="top-left" />
          <AboutImageAccent className="bottom-right" />
        </AboutImageContainer>
      </AboutContainer>
    </Section>
  );
};

export default About;
