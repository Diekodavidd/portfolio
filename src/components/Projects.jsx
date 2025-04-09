import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Movie App",
    type: "JavaScript",
    tech: "HTML, CSS, JS, MovieDB API",
    live: "https://alexandercinema.netlify.app",
    github: "https://github.com/Diekodavidd/MovieLibrary.git",
    desc: "Search your favorite movies by name or genre, including Marvel heroes. Uses MovieDB API to fetch and display movie data.",
  },
  {
    title: "Weather Site",
    type: "JavaScript",
    tech: "HTML, CSS, JS, OpenWeather API",
    live: "https://alexanderweather.netlify.app",
    github: "https://github.com/Diekodavidd/Weathering.git",
    desc: "Get live weather updates, forecasts, playlists, and a seasonal chat room. Built with JS and OpenWeather API.",
  },
  {
    title: "Bankudo Games Table",
    type: "Firebase",
    tech: "HTML, CSS, JS, Firebase",
    live: "https://bankudooo.web.app",
    github: "https://github.com/Diekodavidd/Bankudo.git",
    desc: "League management site for players and masters to track games, view tables, and log complaints. Firebase handles backend and auth.",
  },
  {
    title: "Cight",
    type: "React",
    tech: "React, Firebase",
    live: "https://cight.netlify.app",
    github: "https://github.com/Diekodavidd/Cight.git",
    desc: "A multi-brand platform offering dry cleaning, delivery, and graphic design. React-based with Firebase backend.",
  },
  {
    title: "E-commerce Fashion",
    type: "React",
    tech: "React, Firebase",
    live: "https://fir-class-a1dcc.web.app",
    github: "#",
    desc: "Fashion website for AlexanderDavidBrand with dynamic product display and Firebase auth.",
  },
  {
    title: "LyonMart",
    type: "General",
    tech: "React, Node.js",
    live: "https://lyonmart.netlify.app",
    github: "https://github.com/Diekodavidd/AlexEmpire.git",
    desc: "A full e-commerce platform allowing users to buy anything and everything, built with React and Node.",
  },
];

const Section = styled.section`
//   background: #0B0C2A;
  color: #f5f5f5;
  padding: 6rem 2rem;
  text-align: center;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 4rem;
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const Card = styled(motion.div)`
  background: #111111;
  padding: 2rem;
  border-radius: 14px;
  box-shadow: 0 0 15px rgba(212, 175, 55, 0.1);
  text-align: left;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 20px rgba(212, 175, 55, 0.25);
  }
`;

const ProjectTitle = styled.h3`
  color: #fff;
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`;

const Type = styled.span`
  display: inline-block;
  background: #C14B4B;
  color: white;
  font-size: 0.8rem;
  padding: 0.25rem 0.6rem;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 0.95rem;
  margin: 1rem 0;
`;

const TechUsed = styled.p`
  font-size: 0.85rem;
  color: #ccc;
  font-style: italic;
  margin-bottom: 1rem;
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;

  a {
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-size: 0.9rem;
    background: #D4AF37;
    color: #111;
    font-weight: bold;
    transition: background 0.3s ease;

    &:hover {
      background: #f5f5f5;
    }
  }
`;

const Projects = () => {
  return (
    <Section id="projects">
      <Title
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Featured Projects
      </Title>

      <Grid>
        {projects.map((proj, i) => (
          <Card
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
          >
            <ProjectTitle>{proj.title}</ProjectTitle>
            <Type>{proj.type}</Type>
            <Description>{proj.desc}</Description>
            <TechUsed>{proj.tech}</TechUsed>
            <Buttons>
              <a href={proj.live} target="_blank" rel="noreferrer">Live Demo</a>
              <a href={proj.github} target="_blank" rel="noreferrer">GitHub</a>
            </Buttons>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default Projects;
