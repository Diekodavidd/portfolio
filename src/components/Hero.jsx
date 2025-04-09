import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

// Styled Components for Hero
const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 2rem;
  background: linear-gradient(135deg, rgba(34, 34, 59, 0.8), rgba(23, 32, 48, 0.8)), url('/path-to-your-background-image.jpg') center/cover no-repeat;
  color: white;
  position: relative;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 1rem;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
`;

const CodeAnimation = styled(motion.code)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  background: rgba(255, 255, 255, 0.1);
  padding: 0.3rem 0.7rem;
  border-radius: 8px;
  font-family: 'Courier New', Courier, monospace;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
`;

const Subtext = styled(motion.p)`
  font-size: 1.2rem;
  margin-top: 1.5rem;
  max-width: 600px;
  text-align: center;
  opacity: 0.85;
  font-weight: 300;
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 30px;
  font-size: 1.8rem;
  color: #d4af37;
  animation: bounce 2s infinite;
  cursor: pointer;

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <Title>Hi, I’m Akintunde Diekololaoluwa</Title>
      <TypeAnimation
        sequence={[
          'fullStackDeveloper();',
          2000,
          'creativeCoder();',
          2000,
          'uiWhisperer();',
          2000,
        ]}
        wrapper="code"
        speed={50}
        repeat={Infinity}
      />
      <Subtext
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        Crafting bold websites that actually feel alive.
      </Subtext>
      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaChevronDown />
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;
