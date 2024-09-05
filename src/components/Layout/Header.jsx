import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: #2c3e50;
  color: white;
  padding: 1rem 2rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">Advanced User Portal</Logo>
        <NavLinks>
          <NavLink to="/skill-ranking">Skill Ranking</NavLink>
          <NavLink to="/job-matching">Job Matching</NavLink>
          <NavLink to="/exclusive-jobs">Exclusive Jobs</NavLink>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;