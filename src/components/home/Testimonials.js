import React from 'react';
import styled from 'styled-components';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { FaQuoteLeft } from 'react-icons/fa';

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

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const TestimonialCard = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => `${theme.borderRadius.medium} ${theme.borderRadius.medium} 0 0`};
  }
`;

const QuoteIcon = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  opacity: 0.3;
`;

const TestimonialText = styled.p`
  font-style: italic;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: ${({ theme }) => theme.borderRadius.round};
  object-fit: cover;
  margin-right: ${({ theme }) => theme.spacing.md};
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.h4`
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const AuthorTitle = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin: 0;
`;

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "I've never tasted strawberries this sweet and flavorful before. Naturlich's organic strawberries have become a staple in my home. My kids love them!",
      author: "Sarah Johnson",
      title: "Health Coach",
      image: "/images/testimonial-1.jpg"
    },
    {
      id: 2,
      text: "As a chef, I'm very particular about my ingredients. Naturlich strawberries are consistently excellent - perfect ripeness, flavor, and they hold up well in my desserts.",
      author: "Michael Chen",
      title: "Executive Chef",
      image: "/images/testimonial-2.jpg"
    },
    {
      id: 3,
      text: "The difference in taste between Naturlich strawberries and store-bought ones is remarkable. These berries remind me of the ones from my grandmother's garden.",
      author: "Emma Rodriguez",
      title: "Food Blogger",
      image: "/images/testimonial-3.jpg"
    }
  ];

  return (
    <Section>
      <Container>
        <SectionTitle>What Our <span>Customers</span> Say</SectionTitle>
        <SectionSubtitle>
          Don't just take our word for it. Here's what strawberry lovers have to say about Naturlich.
        </SectionSubtitle>
        
        <TestimonialsGrid>
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id}>
              <QuoteIcon>
                <FaQuoteLeft />
              </QuoteIcon>
              <TestimonialText>
                "{testimonial.text}"
              </TestimonialText>
              <TestimonialAuthor>
                <AuthorImage src={testimonial.image} alt={testimonial.author} />
                <AuthorInfo>
                  <AuthorName>{testimonial.author}</AuthorName>
                  <AuthorTitle>{testimonial.title}</AuthorTitle>
                </AuthorInfo>
              </TestimonialAuthor>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </Container>
    </Section>
  );
};

export default Testimonials;
