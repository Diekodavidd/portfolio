import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaReact, FaNode, FaHtml5, FaCss3Alt, FaJs, FaGithub } from 'react-icons/fa';
import Lottie from 'lottie-react';
import codingAnimation from '../assets/Animation - 1744226088555.json';
import { FaChevronDown } from 'react-icons/fa';

const AboutSection = styled.section`
  min-height: 100vh;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.accent};
  padding: 7rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Heading = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.accent};
  font-weight: 600;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const AnimationWrapper = styled(motion.div)`
  width: 300px;
  height: 300px;
  opacity: 0;
  transform: translateY(20px);

  &.in-view {
    opacity: 1;
    transform: translateY(0);
    transition: all 1s ease;
  }
`;

const TextContent = styled(motion.div)`
  max-width: 600px;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const StackIcons = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;

  svg {
    font-size: 2.5rem;
    transition: transform 0.3s ease, color 0.3s ease;
    color: #f5f5f5;

    &:hover {
      transform: scale(1.2);
      color: #D4AF37;
    }
  }
`;

const ResumeButton = styled(motion.a)`
  margin-top: 2.5rem;
  padding: 0.8rem 1.8rem;
  background-color: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.background};
  border-radius: 10px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 10px ${({ theme }) => theme.accent}44;

  &:hover {
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.accent};
    transform: scale(1.1);
  }
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

const About = () => {
  return (
    <AboutSection id="about"
    initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        >
      <Heading
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Meet Dev Alex – Your Code Whisperer!
      </Heading>

      <ContentWrapper>
        <AnimationWrapper
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Lottie animationData={codingAnimation} loop autoplay />
        </AnimationWrapper>

        <TextContent
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Hi there! I'm <strong>Akintunde Diekololaoluwa</strong>, but in the world of code, they call me <strong>dev Alex</strong>.
          I’m a React & Node.js enthusiast who thrives on building seamless user experiences and powerful web applications. Whether I’m crafting an intuitive UI or diving into back-end magic, my goal is to make the web a more interactive, beautiful place. When I’m not coding, you can catch me exploring new tech trends, playing chess, or diving into my favorite sci-fi movies.
        </TextContent>
      </ContentWrapper>

      <StackIcons
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <FaReact />
        <FaNode />
        <FaHtml5 />
        <FaCss3Alt />
        <FaJs />
        <FaGithub />
      </StackIcons>

      <ResumeButton
        href="public/Alex cv.pdf"
        download
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        📄 Download My Resume
      </ResumeButton>

      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <FaChevronDown />
      </ScrollIndicator>
    </AboutSection>
  );
};

export default About;
