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
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <div className="app">
        <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem' }}>
          <h1 style={{ color: 'gold' }}>Alex.dev</h1>
          <ThemeToggle toggle={() => setIsDarkMode(!isDarkMode)} isDarkMode={isDarkMode} />
        </header>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <FunStuff />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
