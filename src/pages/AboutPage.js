import React from 'react';
import styled from 'styled-components';
import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section';

const PageHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.tertiary};
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

const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xxl};
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ContentColumn = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    order: ${({ reverse }) => reverse ? 1 : 0};
  }
`;

const SectionTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const SectionText = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const ImageContainer = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.large};
  
  img {
    width: 100%;
    display: block;
  }
`;

const TeamSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xxl};
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const TeamMember = styled.div`
  text-align: center;
`;

const TeamMemberImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: ${({ theme }) => theme.borderRadius.round};
  object-fit: cover;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  border: 5px solid ${({ theme }) => theme.colors.primary};
`;

const TeamMemberName = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const TeamMemberTitle = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const TeamMemberBio = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const AboutPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Berry Goodman',
      title: 'Founder & CEO',
      bio: 'Berry founded Naturlich with a vision to grow the most delicious organic strawberries while respecting nature.',
      image: '/images/team-1.jpg'
    },
    {
      id: 2,
      name: 'Jammy Seedling',
      title: 'Head of Farming',
      bio: 'With over 20 years of experience in organic farming, Jammy ensures our strawberries are grown to perfection.',
      image: '/images/team-2.jpg'
    },
    {
      id: 3,
      name: 'Pippa Berryton',
      title: 'Product Development',
      bio: 'Pippa creates our delicious strawberry products and is always experimenting with new recipes.',
      image: '/images/team-3.jpg'
    }
  ];

  return (
    <>
      <PageHeader>
        <Container>
          <PageTitle>About Naturlich</PageTitle>
          <PageDescription>
            Learn about our story, our mission, and the people behind our delicious strawberries.
          </PageDescription>
        </Container>
      </PageHeader>
      
      <ContentSection>
        <Container>
          <TwoColumnGrid>
            <ContentColumn>
              <SectionTitle>Our <span>Story</span></SectionTitle>
              <SectionText>
                Naturlich was founded in 2010 by Berry Goodman, a third-generation farmer with a passion for sustainable agriculture. 
                What began as a small family farm has grown into a thriving business that produces some of the finest organic 
                strawberries in the country.
              </SectionText>
              <SectionText>
                Our name, "Naturlich" (meaning "naturally" in German), reflects our commitment to growing strawberries 
                the way nature intended - without harmful pesticides or artificial fertilizers, and with respect for the 
                soil, water, and local ecosystem.
              </SectionText>
              <SectionText>
                Today, our 200-acre farm is home to 12 varieties of strawberries, each selected for its unique flavor profile, 
                nutritional value, and growing characteristics. We continue to innovate and improve our farming practices 
                while staying true to our original mission.
              </SectionText>
            </ContentColumn>
            
            <ContentColumn>
              <ImageContainer>
                <img src="/images/about-story.jpg" alt="Naturlich farm in the early days" />
              </ImageContainer>
            </ContentColumn>
          </TwoColumnGrid>
          
          <TwoColumnGrid style={{ marginTop: '5rem' }}>
            <ContentColumn reverse>
              <ImageContainer>
                <img src="/images/about-mission.jpg" alt="Sustainable farming practices at Naturlich" />
              </ImageContainer>
            </ContentColumn>
            
            <ContentColumn>
              <SectionTitle>Our <span>Mission</span></SectionTitle>
              <SectionText>
                At Naturlich, our mission is to grow the most delicious, nutritious strawberries while being stewards of the land 
                and supporting our local community. We believe that healthy soil produces healthy plants, which in turn produce 
                healthy, flavorful fruits.
              </SectionText>
              <SectionText>
                We are committed to sustainable farming practices that preserve and enhance the natural environment. This includes 
                using organic fertilizers, practicing crop rotation, conserving water, and providing habitat for beneficial insects 
                and wildlife.
              </SectionText>
              <SectionText>
                We also believe in fair labor practices and supporting our local economy. Our employees receive fair wages and 
                benefits, and we partner with local businesses whenever possible. A portion of our profits goes to supporting 
                community initiatives and agricultural education programs.
              </SectionText>
            </ContentColumn>
          </TwoColumnGrid>
          
          <TeamSection>
            <SectionTitle style={{ textAlign: 'center' }}>Meet Our <span>Team</span></SectionTitle>
            <SectionText style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
              The passionate people behind Naturlich who work tirelessly to bring you the best strawberries.
            </SectionText>
            
            <TeamGrid>
              {teamMembers.map(member => (
                <TeamMember key={member.id}>
                  <TeamMemberImage src={member.image} alt={member.name} />
                  <TeamMemberName>{member.name}</TeamMemberName>
                  <TeamMemberTitle>{member.title}</TeamMemberTitle>
                  <TeamMemberBio>{member.bio}</TeamMemberBio>
                </TeamMember>
              ))}
            </TeamGrid>
          </TeamSection>
        </Container>
      </ContentSection>
    </>
  );
};

export default AboutPage;
