import React from 'react';
import styled from 'styled-components';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { FaLeaf, FaHeart, FaSeedling, FaShippingFast } from 'react-icons/fa';

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  transition: transform ${({ theme }) => theme.transitions.medium};
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const FeatureTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 0;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  max-width: 700px;
  margin: 0 auto ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.large};
`;

const Features = () => {
  return (
    <Section bgColor="gray">
      <Container>
        <SectionTitle>Why Choose <span>Naturlich</span> Strawberries?</SectionTitle>
        <SectionSubtitle>
          Our strawberries are grown with care, love, and respect for nature,
          resulting in the most delicious and nutritious berries.
        </SectionSubtitle>
        
        <FeaturesGrid>
          <FeatureCard>
            <FeatureIcon>
              <FaLeaf />
            </FeatureIcon>
            <FeatureTitle>100% Organic</FeatureTitle>
            <FeatureDescription>
              Grown without pesticides or harmful chemicals, our strawberries are certified organic and environmentally friendly.
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureIcon>
              <FaHeart />
            </FeatureIcon>
            <FeatureTitle>Rich in Nutrients</FeatureTitle>
            <FeatureDescription>
              Packed with vitamins, antioxidants, and fiber, our strawberries contribute to your health and wellbeing.
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureIcon>
              <FaSeedling />
            </FeatureIcon>
            <FeatureTitle>Sustainable Farming</FeatureTitle>
            <FeatureDescription>
              We use sustainable farming practices that preserve soil health and biodiversity for future generations.
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureIcon>
              <FaShippingFast />
            </FeatureIcon>
            <FeatureTitle>Farm to Table</FeatureTitle>
            <FeatureDescription>
              Our strawberries go from farm to your table in record time, ensuring maximum freshness and flavor.
            </FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
      </Container>
    </Section>
  );
};

export default Features;
