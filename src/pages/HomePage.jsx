import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex-grow: 1;
  padding: 2rem;
`;

const Hero = styled.div`
  background-color: #3498db;
  color: white;
  padding: 3rem 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled(Link)`
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  text-decoration: none;
  color: #333;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const HomePage = () => {
  return (
    <PageContainer>
      <Header />
      <MainContent>
        <Hero>
          <h1>Welcome to Your Advanced User Portal</h1>
          <p>Unlock premium features to supercharge your job search and career growth.</p>
        </Hero>
        <FeatureGrid>
          <FeatureCard to="/skill-ranking">
            <h2>Skill Ranking</h2>
            <p>Discover how your skills stack up in the job market.</p>
          </FeatureCard>
          <FeatureCard to="/job-matching">
            <h2>Advanced Job Matching</h2>
            <p>Find the perfect job opportunities tailored to your profile.</p>
          </FeatureCard>
          <FeatureCard to="/exam-home">
            <h2>Certification Exams</h2>
            <p>A system for conducting certification exams, both online (AI-proctored) and offline, similar to AMCAT or Cocubes.</p>
          </FeatureCard>
        </FeatureGrid>
      </MainContent>
      <Footer />
    </PageContainer>
  );
};

export default HomePage;