import React, { useState } from 'react';
import styled from 'styled-components';
import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section';
import { Button } from '../components/common/Button';
import { Link } from 'react-router-dom';
import Modal from '../components/common/Modal';
import ProductDetail from '../components/products/ProductDetail';

const PageHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.accent};
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

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
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

const CategoryTabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  flex-wrap: wrap;
`;

const CategoryTab = styled.button`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  margin: ${({ theme }) => theme.spacing.xs};
  background-color: ${({ active, theme }) => 
    active ? theme.colors.tertiary : theme.colors.gray};
  color: ${({ active, theme }) => 
    active ? theme.colors.light : theme.colors.textPrimary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-weight: 500;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.short};
  
  &:hover {
    background-color: ${({ active, theme }) => 
      active ? theme.colors.tertiaryDark : theme.colors.darkGray};
    color: ${({ theme }) => theme.colors.light};
  }
`;

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openProductModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'fresh', name: 'Fresh Strawberries' },
    { id: 'processed', name: 'Processed Products' },
    { id: 'gifts', name: 'Gift Sets' }
  ];
  
  const products = [
    {
      id: 1,
      title: 'Fresh Strawberries',
      description: 'Hand-picked, organic strawberries at the peak of ripeness.',
      price: '£5.49',
      image: '/images/fresh-strawberries.jpg',
      category: 'fresh',
      link: '/products/fresh-strawberries'
    },
    {
      id: 2,
      title: 'Premium Strawberries',
      description: 'Our largest, juiciest strawberries selected for their exceptional flavor.',
      price: '£6.99',
      image: '/images/premium-strawberries.jpg',
      category: 'fresh',
      link: '/products/premium-strawberries'
    },
    {
      id: 3,
      title: 'Strawberry Jam',
      description: 'Homemade jam made with our organic strawberries and natural sweeteners.',
      price: '£6.99',
      image: '/images/strawberry-jam.jpg',
      category: 'processed',
      link: '/products/strawberry-jam'
    },
    {
      id: 4,
      title: 'Strawberry Juice',
      description: 'Refreshing, 100% pure strawberry juice with no added sugars or preservatives.',
      price: '£5.99',
      image: '/images/strawberry-juice.jpg',
      category: 'processed',
      link: '/products/strawberry-juice'
    },
    {
      id: 5,
      title: 'Frozen Strawberries',
      description: 'Flash-frozen at peak ripeness to preserve flavor and nutrients.',
      price: '£4.49',
      image: '/images/frozen-strawberries.jpg',
      category: 'processed',
      link: '/products/frozen-strawberries'
    },
    {
      id: 6,
      title: 'Gift Box',
      description: 'Perfect gift featuring our premium strawberries and strawberry products.',
      price: '£19.99',
      image: '/images/gift-box.jpg',
      category: 'gifts',
      link: '/products/gift-boxes'
    },
    {
      id: 7,
      title: 'Strawberry Basket',
      description: 'A beautiful basket filled with fresh strawberries and gourmet treats.',
      price: '£27.99',
      image: '/images/strawberry-basket.jpg',
      category: 'gifts',
      link: '/products/strawberry-basket'
    },
    {
      id: 8,
      title: 'Dried Strawberries',
      description: 'Sweet, chewy dried strawberries - a perfect healthy snack.',
      price: '£7.99',
      image: '/images/dried-strawberries.jpg',
      category: 'processed',
      link: '/products/dried-strawberries'
    },
    {
      id: 9,
      title: 'Strawberry Honey',
      description: 'Our special honey infused with the essence of strawberries.',
      price: '£9.99',
      image: '/images/strawberry-honey.jpg',
      category: 'processed',
      link: '/products/strawberry-honey'
    }
  ];
  
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <>
      <PageHeader>
        <Container>
          <PageTitle>Our Products</PageTitle>
          <PageDescription>
            Discover our range of premium strawberry products, from fresh berries to delicious jams and gift sets.
          </PageDescription>
        </Container>
      </PageHeader>
      
      <Section>
        <Container>
          <CategoryTabs>
            {categories.map(category => (
              <CategoryTab 
                key={category.id}
                active={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </CategoryTab>
            ))}
          </CategoryTabs>
          
          <ProductsGrid>
            {filteredProducts.map(product => (
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
        </Container>
      </Section>
      
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        title={selectedProduct?.title || 'Product Details'}
      >
        {selectedProduct && <ProductDetail product={selectedProduct} />}
      </Modal>
    </>
  );
};

export default ProductsPage;
