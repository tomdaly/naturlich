import React, { useState } from 'react';
import styled from 'styled-components';
import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section';
import { Button } from '../components/common/Button';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xxl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled.form`
  background-color: ${({ theme }) => theme.colors.light};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

const FormTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-weight: 500;
`;

const FormInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(250, 80, 83, 0.2);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(250, 80, 83, 0.2);
  }
`;

const SuccessMessage = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.light};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const ContactInfo = styled.div``;

const InfoTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const InfoText = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const InfoItems = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const InfoIcon = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin-right: ${({ theme }) => theme.spacing.md};
  margin-top: 3px;
`;

const InfoContent = styled.div``;

const InfoLabel = styled.h4`
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const InfoValue = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
`;

const MapContainer = styled.div`
  height: 300px;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      <PageHeader>
        <Container>
          <PageTitle>Contact Us</PageTitle>
          <PageDescription>
            Have questions or want to place an order? Get in touch with our team.
          </PageDescription>
        </Container>
      </PageHeader>
      
      <Section>
        <Container>
          <ContactGrid>
            <ContactForm onSubmit={handleSubmit}>
              <FormTitle>Send Us a <span>Message</span></FormTitle>
              
              <FormGroup>
                <FormLabel htmlFor="name">Your Name</FormLabel>
                <FormInput
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="email">Your Email</FormLabel>
                <FormInput
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="subject">Subject</FormLabel>
                <FormInput
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="message">Your Message</FormLabel>
                <FormTextarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <Button type="submit" size="large">
                Send Message
              </Button>
              
              {isSubmitted && (
                <SuccessMessage>
                  Thank you for your message! We'll get back to you soon.
                </SuccessMessage>
              )}
            </ContactForm>
            
            <ContactInfo>
              <InfoTitle>Get in <span>Touch</span></InfoTitle>
              <InfoText>
                We'd love to hear from you! Whether you have questions about our products,
                want to place an order, or are interested in visiting our farm, our team is here to help.
              </InfoText>
              
              <InfoItems>
                <InfoItem>
                  <InfoIcon>
                    <FaMapMarkerAlt />
                  </InfoIcon>
                  <InfoContent>
                    <InfoLabel>Our Location</InfoLabel>
                    <InfoValue>123 Berry Lane, Strawberry Fields, Kent ME19 6JU</InfoValue>
                  </InfoContent>
                </InfoItem>
                
                <InfoItem>
                  <InfoIcon>
                    <FaPhone />
                  </InfoIcon>
                  <InfoContent>
                    <InfoLabel>Phone Number</InfoLabel>
                    <InfoValue>01234 567890</InfoValue>
                  </InfoContent>
                </InfoItem>
                
                <InfoItem>
                  <InfoIcon>
                    <FaEnvelope />
                  </InfoIcon>
                  <InfoContent>
                    <InfoLabel>Email Address</InfoLabel>
                    <InfoValue>info@naturlich.co.uk</InfoValue>
                  </InfoContent>
                </InfoItem>
                
                <InfoItem>
                  <InfoIcon>
                    <FaClock />
                  </InfoIcon>
                  <InfoContent>
                    <InfoLabel>Business Hours</InfoLabel>
                    <InfoValue>Monday - Friday: 9am - 5pm</InfoValue>
                    <InfoValue>Saturday: 10am - 4pm</InfoValue>
                    <InfoValue>Sunday: Closed</InfoValue>
                  </InfoContent>
                </InfoItem>
              </InfoItems>
              
              <MapContainer>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2495.6988622694036!2d0.4034991156741965!3d51.29784647959757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47df4b2a49a5d8ab%3A0x95009f275b7bce8c!2sKent%20ME19%206JU!5e0!3m2!1sen!2suk!4v1616252573877!5m2!1sen!2suk" 
                  allowFullScreen="" 
                  loading="lazy"
                  title="Naturlich Farm Location"
                ></iframe>
              </MapContainer>
            </ContactInfo>
          </ContactGrid>
        </Container>
      </Section>
    </>
  );
};

export default ContactPage;
