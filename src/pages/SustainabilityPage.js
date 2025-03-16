import React from 'react';
import styled from 'styled-components';
import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section';
import { FaLeaf, FaWater, FaSeedling, FaRecycle } from 'react-icons/fa';

const PageHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  color: ${({ theme }) => theme.colors.light};
  text-align: center;
  margin-top: 80px;
`;

const PageTitle = styled.h1`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const PageDescription = styled.p`
  max-width: 700px;
  margin: 0 auto;
  font-size: ${({ theme }) => theme.fontSizes.large};
`;

const ContentSection = styled(Section)`
  padding: ${({ theme }) => theme.spacing.xxl} 0;
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

const PracticesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const PracticeCard = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

const PracticeIcon = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-right: ${({ theme }) => theme.spacing.lg};
  flex-shrink: 0;
`;

const PracticeContent = styled.div``;

const PracticeTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const PracticeDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 0;
`;

const ImageSection = styled.div`
  margin: ${({ theme }) => theme.spacing.xxl} 0;
  position: relative;
  height: 400px;
  background-image: url('/images/sustainability-banner.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: ${({ theme }) => theme.borderRadius.medium};
  }
`;

const ImageContent = styled.div`
  position: relative;
  z-index: 1;
  color: ${({ theme }) => theme.colors.light};
  text-align: center;
  max-width: 700px;
  padding: ${({ theme }) => theme.spacing.lg};
`;

const ImageTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ImageText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin-bottom: 0;
`;

const StatsSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xxl};
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.tertiary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 500;
`;

const SustainabilityPage = () => {
  return (
    <>
      <PageHeader>
        <Container>
          <PageTitle>Sustainability</PageTitle>
          <PageDescription>
            Learn about our commitment to sustainable farming and environmental stewardship.
          </PageDescription>
        </Container>
      </PageHeader>
      
      <ContentSection>
        <Container>
          <SectionTitle>Our Sustainable <span>Practices</span></SectionTitle>
          <SectionSubtitle>
            At Naturlich, sustainability isn't just a buzzword—it's at the core of everything we do.
            Here are some of the ways we're working to protect our planet while growing delicious strawberries.
          </SectionSubtitle>
          
          <PracticesGrid>
            <PracticeCard>
              <PracticeIcon>
                <FaLeaf />
              </PracticeIcon>
              <PracticeContent>
                <PracticeTitle>Organic Farming</PracticeTitle>
                <PracticeDescription>
                  We grow all our strawberries without synthetic pesticides or fertilizers. 
                  Instead, we use natural compost, beneficial insects, and crop rotation to 
                  maintain soil health and control pests.
                </PracticeDescription>
              </PracticeContent>
            </PracticeCard>
            
            <PracticeCard>
              <PracticeIcon>
                <FaWater />
              </PracticeIcon>
              <PracticeContent>
                <PracticeTitle>Water Conservation</PracticeTitle>
                <PracticeDescription>
                  Our drip irrigation systems deliver water directly to plant roots, reducing 
                  water usage by up to 60% compared to conventional methods. We also collect 
                  rainwater for use during dry periods.
                </PracticeDescription>
              </PracticeContent>
            </PracticeCard>
            
            <PracticeCard>
              <PracticeIcon>
                <FaSeedling />
              </PracticeIcon>
              <PracticeContent>
                <PracticeTitle>Biodiversity</PracticeTitle>
                <PracticeDescription>
                  We maintain hedgerows, flower strips, and natural areas throughout our farm 
                  to provide habitat for pollinators, beneficial insects, and wildlife. This 
                  creates a balanced ecosystem that supports our strawberries.
                </PracticeDescription>
              </PracticeContent>
            </PracticeCard>
            
            <PracticeCard>
              <PracticeIcon>
                <FaRecycle />
              </PracticeIcon>
              <PracticeContent>
                <PracticeTitle>Waste Reduction</PracticeTitle>
                <PracticeDescription>
                  We compost all plant waste to create nutrient-rich soil amendments. Our 
                  packaging is made from recycled or biodegradable materials, and we're 
                  constantly looking for ways to reduce our environmental footprint.
                </PracticeDescription>
              </PracticeContent>
            </PracticeCard>
          </PracticesGrid>
          
          <ImageSection>
            <ImageContent>
              <ImageTitle>Our <span>Commitment</span> to the Future</ImageTitle>
              <ImageText>
                We believe that sustainable farming is not just better for the environment—it produces 
                better, more nutritious strawberries. By working with nature rather than against it, 
                we're creating a healthier future for our customers, our community, and our planet.
              </ImageText>
            </ImageContent>
          </ImageSection>
          
          <StatsSection>
            <SectionTitle>Our <span>Impact</span> by the Numbers</SectionTitle>
            <SectionSubtitle>
              We're proud of the positive environmental impact our sustainable practices have made.
              Here are some of the results we've achieved so far.
            </SectionSubtitle>
            
            <StatsGrid>
              <StatCard>
                <StatNumber>60%</StatNumber>
                <StatLabel>Less Water Used Compared to Conventional Farming</StatLabel>
              </StatCard>
              
              <StatCard>
                <StatNumber>100%</StatNumber>
                <StatLabel>Renewable Energy Used on Our Farm</StatLabel>
              </StatCard>
              
              <StatCard>
                <StatNumber>30+</StatNumber>
                <StatLabel>Native Plant Species on Our Property</StatLabel>
              </StatCard>
              
              <StatCard>
                <StatNumber>0</StatNumber>
                <StatLabel>Synthetic Pesticides Used</StatLabel>
              </StatCard>
            </StatsGrid>
          </StatsSection>
        </Container>
      </ContentSection>
    </>
  );
};

export default SustainabilityPage;
