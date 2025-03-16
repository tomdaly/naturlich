import React, { useState } from 'react';
import styled from 'styled-components';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Button } from '../common/Button';

const NewsletterSection = styled(Section)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
`;

const NewsletterContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const NewsletterTitle = styled.h2`
  color: ${({ theme }) => theme.colors.light};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const NewsletterText = styled.p`
  max-width: 600px;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.fontSizes.large};
`;

const NewsletterForm = styled.form`
  display: flex;
  width: 100%;
  max-width: 600px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const NewsletterInput = styled.input`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md};
  border: none;
  border-radius: ${({ theme }) => `${theme.borderRadius.medium} 0 0 ${theme.borderRadius.medium}`};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.accent};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    border-radius: ${({ theme }) => `${theme.borderRadius.medium} ${theme.borderRadius.medium} 0 0`};
    margin-bottom: 1px;
  }
`;

const SubscribeButton = styled(Button)`
  border-radius: ${({ theme }) => `0 ${theme.borderRadius.medium} ${theme.borderRadius.medium} 0`};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    border-radius: ${({ theme }) => `0 0 ${theme.borderRadius.medium} ${theme.borderRadius.medium}`};
  }
`;

const SuccessMessage = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.light};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  margin-top: ${({ theme }) => theme.spacing.md};
  width: 100%;
  max-width: 600px;
`;

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // In a real app, you would send this to your backend
      console.log('Subscribing email:', email);
      setIsSubmitted(true);
      setEmail('');
    }
  };
  
  return (
    <NewsletterSection>
      <NewsletterContainer>
        <NewsletterTitle>Subscribe to Our Newsletter</NewsletterTitle>
        <NewsletterText>
          Stay updated with our latest products, seasonal offers, and strawberry growing tips.
        </NewsletterText>
        
        <NewsletterForm onSubmit={handleSubmit}>
          <NewsletterInput
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Email address"
          />
          <SubscribeButton 
            type="submit" 
            variant="secondary"
          >
            Subscribe
          </SubscribeButton>
        </NewsletterForm>
        
        {isSubmitted && (
          <SuccessMessage>
            Thank you for subscribing! Check your email for a confirmation.
          </SuccessMessage>
        )}
      </NewsletterContainer>
    </NewsletterSection>
  );
};

export default Newsletter;
