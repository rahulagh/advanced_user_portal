import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Bell, Menu, X } from 'lucide-react';


const HeaderContainer = styled.header`
  background-color: #1a202c;
  color: white;
  position: sticky;
  top: 0;
  z-index: 70;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.25rem;
  font-weight: bold;
  color: white;
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
  color: white;
  text-decoration: none;
  
  &:hover {
    color: #a0aec0;
  }
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const NavMobile = styled.nav`
  background-color: #2d3748;
  padding: 1rem;
  
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
  );
};

export default Header;