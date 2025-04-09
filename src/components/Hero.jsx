import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const HeroSection = styled.section`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;

  h1 {
    font-size: 3rem;
    color: ${({ theme }) => theme.accent};
    margin-bottom: 1rem;
  }

  code {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.text};
    background: rgba(255, 255, 255, 0.1);
    padding: 0.3rem 0.7rem;
    border-radius: 8px;
  }
`;
const Subtext = styled(motion.p)`
  font-size: 1.2rem;
  margin-top: 1.5rem;
  max-width: 600px;
  text-align: center;
  opacity: 0.85;
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 30px;
  font-size: 1.5rem;
  color: #d4af37;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <h1>Hi, I’m Akintunde Diekololaoluwa</h1>
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
      >
        <FaChevronDown />
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;
