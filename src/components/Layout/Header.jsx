import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Bell, Menu, X } from 'lucide-react';

const HeaderWrapper = styled.div`
  background-color: #dbdbdb;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const HeaderContainer = styled.header`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  height: 74px;
  
  @media (max-width: 1240px) {
    padding: 1rem 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 1rem;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Logo = styled(Link)`
  font-size: 1.25rem;
  font-weight: bold;
  color: #000;
  text-decoration: none;
`;

const NavDesktop = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
`;

const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: #333;
  cursor: pointer;
  font-size: 1.5rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

const NavMobile = styled.nav`
  background-color: #f8f9fa;
  padding: 1rem;
  width: 100%;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileNavLink = styled(NavLink)`
  display: block;
  padding: 0.5rem 0;
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderContent>
          <Logo to="/">Advanced User Portal</Logo>

          <NavDesktop>
            <NavLink to="/skill-ranking">Skill Ranking</NavLink>
            <NavLink to="/job-matching">Job Matching</NavLink>
            <NavLink to="/exclusive-jobs">Exclusive Jobs</NavLink>
            <NavLink to="/notifications">
              <Bell size={20} />
            </NavLink>
          </NavDesktop>

          <MenuButton onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </MenuButton>
        </HeaderContent>

        {isMenuOpen && (
          <NavMobile>
            <MobileNavLink to="/skill-ranking" onClick={toggleMenu}>Skill Ranking</MobileNavLink>
            <MobileNavLink to="/job-matching" onClick={toggleMenu}>Job Matching</MobileNavLink>
            <MobileNavLink to="/exclusive-jobs" onClick={toggleMenu}>Exclusive Jobs</MobileNavLink>
            <MobileNavLink to="/notifications" onClick={toggleMenu}>Notifications</MobileNavLink>
          </NavMobile>
        )}
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;