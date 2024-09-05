import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #34495e;
  color: white;
  padding: 1rem 2rem;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Advanced User Portal. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;