import React from 'react';
import styled from 'styled-components';
import { Button } from '../common/Button';

const ProductDetailContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ProductImage = styled.div`
  height: 300px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 250px;
  }
`;

const ProductInfo = styled.div``;

const ProductTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const ProductPrice = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ProductDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const ProductFeatures = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const FeatureTitle = styled.h4`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const FeatureList = styled.ul`
  list-style-type: disc;
  margin-left: ${({ theme }) => theme.spacing.lg};
`;

const FeatureItem = styled.li`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const ButtonContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const ProductDetail = ({ product }) => {
  // Default features if not provided
  const features = product.features || [
    'Organically grown',
    'No pesticides or chemicals',
    'Harvested at peak ripeness',
    'Rich in vitamins and antioxidants'
  ];
  
  return (
    <ProductDetailContainer>
      <ProductImage image={product.image} />
      <ProductInfo>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductPrice>{product.price}</ProductPrice>
        <ProductDescription>{product.description}</ProductDescription>
        
        <ProductFeatures>
          <FeatureTitle>Features:</FeatureTitle>
          <FeatureList>
            {features.map((feature, index) => (
              <FeatureItem key={index}>{feature}</FeatureItem>
            ))}
          </FeatureList>
        </ProductFeatures>
        
        <ButtonContainer>
          <Button size="large">Add to Cart</Button>
        </ButtonContainer>
      </ProductInfo>
    </ProductDetailContainer>
  );
};

export default ProductDetail;
