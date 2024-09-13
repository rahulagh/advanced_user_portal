import React, { useState } from 'react';
import styled from 'styled-components';
import { Image } from 'lucide-react';
import logoSrc from "../../logo/agh_logo.png"

const FooterContainer = styled.footer`
  background-color: #1a202c;
  color: white;
  padding: 1.5rem 1rem;
  margin: 0px;
  width: 100%;
  box-sizing: border-box;
`;

const FooterContent = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const LogoContainer = styled.div`
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  overflow: hidden;
`;

const Logo = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const LogoFallback = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2d3748;
  border-radius: 8px;
`;

const CompanyName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
`;

const Copyright = styled.p`
  font-size: 0.875rem;
  margin: 0;
`;

const LogoWithFallback = () => {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <LogoContainer>
        <LogoFallback>
          <Image size={32} />
        </LogoFallback>
      </LogoContainer>
    );
  }

  return (
    <LogoContainer>
      <Logo
        src={logoSrc}
        alt="AGH"
        onError={() => setError(true)}
      />
    </LogoContainer>
  );
};

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <LogoSection>
          <LogoWithFallback />
          <CompanyName>Aptitude Guru Hemchandar</CompanyName>
        </LogoSection>
        <Copyright>
          &copy; {new Date().getFullYear()} Advanced User Portal. All rights reserved.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;