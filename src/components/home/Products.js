import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Button } from '../common/Button';
import Modal from '../common/Modal';
import ProductDetail from '../products/ProductDetail';

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

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  background-color: ${({ theme }) => theme.colors.light};
  transition: transform ${({ theme }) => theme.transitions.medium};
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const ProductImage = styled.div`
  height: 250px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
`;

const ProductContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const ProductTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ProductDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ProductPrice = styled.div`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const products = [
    {
      id: 1,
      title: 'Fresh Strawberries',
      description: 'Hand-picked, organic strawberries at the peak of ripeness.',
      price: '£5.49',
      image: process.env.PUBLIC_URL + '/images/fresh-strawberries.jpg',
      link: '/products/fresh-strawberries',
      features: [
        'Organically grown',
        'No pesticides or chemicals',
        'Harvested at peak ripeness',
        'Rich in vitamins and antioxidants'
      ]
    },
    {
      id: 2,
      title: 'Strawberry Jam',
      description: 'Homemade jam made with our organic strawberries and natural sweeteners.',
      price: '£6.99',
      image: process.env.PUBLIC_URL + '/images/strawberry-jam.jpg',
      link: '/products/strawberry-jam',
      features: [
        'Made with 100% organic strawberries',
        'No artificial preservatives',
        'Natural sweeteners only',
        'Perfect for breakfast or desserts'
      ]
    },
    {
      id: 3,
      title: 'Gift Box',
      description: 'Perfect gift featuring our premium strawberries and strawberry products.',
      price: '£19.99',
      image: process.env.PUBLIC_URL + '/images/gift-box.jpg',
      link: '/products/gift-boxes',
      features: [
        'Contains fresh strawberries',
        'Includes our signature strawberry jam',
        'Handcrafted wooden box',
        'Perfect for special occasions'
      ]
    }
  ];
  
  const openProductModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Section>
      <Container>
        <SectionTitle>Our <span>Strawberry</span> Products</SectionTitle>
        <SectionSubtitle>
          From fresh strawberries to delicious jams and gift boxes,
          discover our range of premium strawberry products.
        </SectionSubtitle>
        
        <ProductsGrid>
          {products.map(product => (
            <ProductCard key={product.id}>
              <ProductImage image={product.image} />
              <ProductContent>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductDescription>{product.description}</ProductDescription>
                <ProductPrice>{product.price}</ProductPrice>
                <Button 
                  variant="outline" 
                  fullWidth
                  onClick={() => openProductModal(product)}
                >
                  View Product
                </Button>
              </ProductContent>
            </ProductCard>
          ))}
        </ProductsGrid>
        
        <ButtonContainer>
          <Button as={Link} to="/products" size="large">
            View All Products
          </Button>
        </ButtonContainer>
      </Container>
      
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        title={selectedProduct?.title || 'Product Details'}
      >
        {selectedProduct && <ProductDetail product={selectedProduct} />}
      </Modal>
    </Section>
  );
};

export default Products;
