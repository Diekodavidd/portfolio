import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import GlobalStyle from './globalStyles';
import Hero from './components/Hero';
import About from './components/About';
import ThemeToggle from './components/ThemeToggle';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import FunStuff from './components/FunStuff';
import Contact from './components/Contact';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import { Element } from 'react-scroll';

const MainContent = styled.div`
  margin-left: 80px; /* Sidebar width */
  padding: 0;
  transition: margin-left 0.3s;
  overflow-x: hidden;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: calc(100% - 80px); /* Full width minus sidebar */
  align-items: center;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.background};
  border-bottom: 1px solid ${({ theme }) => theme.accent};
  // position: sticky;
  top: 0;
  z-index: 90;
`;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <div className="app">
        <Sidebar />
        <MainContent>
          <Header>
            <h1 style={{ color: 'gold' }}>Alex.dev</h1>
            <ThemeToggle toggle={() => setIsDarkMode(!isDarkMode)} isDarkMode={isDarkMode} />
          </Header>

          <Element name="home"><Hero /></Element>
          <Element name="about"><About /></Element>
          <Element name="techstack"><TechStack /></Element>
          <Element name="projects"><Projects /></Element>
          <Element name="funstuff"><FunStuff /></Element>
          <Element name="contact"><Contact /></Element>
          <Element name="footer"><Footer /></Element>
        </MainContent>
      </div>
    </ThemeProvider>
  );
}

export default App;
