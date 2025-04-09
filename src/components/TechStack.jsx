import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaJs, FaGithub, FaNpm } from 'react-icons/fa';
import { SiTailwindcss, SiFirebase, SiMongodb, SiExpress, SiVite } from 'react-icons/si';

const Section = styled.section`
//   background: #0B0C2A;
  padding: 5rem 2rem;
    color: ${({ theme }) => theme.accent};
  text-align: center;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 3rem;
`;

const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const Category = styled(motion.div)`
  background: #111111;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(212, 175, 55, 0.15);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
    transform: scale(1.03);
  }
`;

const CatTitle = styled.h3`
  font-size: 1.3rem;
 color: ${({ theme }) => theme.accent};
  margin-bottom: 1.2rem;
  border-bottom: 1px solid #D4AF37;
  padding-bottom: 0.5rem;
`;

const IconGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  justify-content: center;

  svg {
    font-size: 2.5rem;
    color: #f5f5f5;
    transition: 0.3s ease;
    
    &:hover {
      color: #D4AF37;
      transform: scale(1.2);
    }
  }
`;

const TechStack = () => {
  return (
    <Section id="stack">
      <Title
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Tech Arsenal
      </Title>

      <GridWrapper>
        <Category
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <CatTitle>Frontend</CatTitle>
          <IconGrid>
            <FaHtml5 />
            <FaCss3 />
            <FaJs />
            <FaReact />
            <SiTailwindcss />
            <SiVite />
          </IconGrid>
        </Category>

        <Category
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <CatTitle>Backend</CatTitle>
          <IconGrid>
            <FaNodeJs />
            <SiExpress />
            <SiFirebase />
            <SiMongodb />
          </IconGrid>
        </Category>

        <Category
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <CatTitle>Tools</CatTitle>
          <IconGrid>
            <FaGithub />
            <FaNpm />
            {/* Add more if needed */}
          </IconGrid>
        </Category>
      </GridWrapper>
    </Section>
  );
};

export default TechStack;
