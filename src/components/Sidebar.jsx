// components/Sidebar.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaSmile, FaEnvelope } from 'react-icons/fa';

const SidebarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 80px;
  height: 100vh;
  background: ${({ theme }) => theme.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
  z-index: 100;

  @media (max-width: 500px) {
  display: none; /* Hide sidebar on small screens */
  }
`;

const NavIcon = styled(Link)`
  margin: 1.5rem 0;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: ${({ theme }) => theme.accent};
    transform: scale(1.2);
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <NavIcon to="home" smooth={true} duration={500}><FaHome /></NavIcon>
      <NavIcon to="about" smooth={true} duration={500}><FaUser /></NavIcon>
      <NavIcon to="techstack" smooth={true} duration={500}><FaCode /></NavIcon>
      <NavIcon to="projects" smooth={true} duration={500}><FaProjectDiagram /></NavIcon>
      <NavIcon to="funstuff" smooth={true} duration={500}><FaSmile /></NavIcon>
      <NavIcon to="contact" smooth={true} duration={500}><FaEnvelope /></NavIcon>
    </SidebarContainer>
  );
};

export default Sidebar;
