import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import CursorTrailEffect from './CursorTrailEffect';

const projects = [
  {
    title: "Movie App",
    type: "JavaScript",
    tech: "HTML, CSS, JS, MovieDB API",
    live: "https://alexandercinema.netlify.app",
    github: "https://github.com/Diekodavidd/MovieLibrary.git",
    desc: "Search your favorite movies by name or genre, including Marvel heroes. Uses MovieDB API to fetch and display movie data.",
    image: "https://api.url2png.com/v6/P4DF2F8BC83648/31e53a2f655cc8f874aba75657a59c84/png/?thumbnail_max_width=851&url=https://alexandercinema.netlify.app&viewport=1280x2000"
  },
  {
    title: "Weather Site",
    type: "JavaScript",
    tech: "HTML, CSS, JS, OpenWeather API",
    live: "https://alexanderweather.netlify.app",
    github: "https://github.com/Diekodavidd/Weathering.git",
    desc: "Get live weather updates, forecasts, playlists, & a seasonal chat room. Built with JS & OpenWeather API.",
    image: "https://api.url2png.com/v6/P4DF2F8BC83648/741d56d8056ffdd03ca0077fb642e938/png/?thumbnail_max_width=851&url=https://alexanderweather.netlify.app&viewport=1280x2000",
  },
  {
    title: "Bankudo Games Table",
    type: "Firebase",
    tech: "HTML, CSS, JS, Firebase",
    live: "https://bankudooo.web.app",
    github: "https://github.com/Diekodavidd/Bankudo.git",
    desc: "League management site for players & masters to track games,view tables, & log complaints.Firebase handles backend.",
    image: "https://api.url2png.com/v6/P4DF2F8BC83648/6adb5a575179c00f3dceab295141938f/png/?thumbnail_max_width=851&url=https://bankudooo.web.app&viewport=1280x2000",
  },
  {
    title: "Cight",
    type: "React",
    tech: "React, Firebase",
    live: "https://cight.netlify.app",
    github: "https://github.com/Diekodavidd/Cight.git",
    desc: "A multi-brand platform offering dry cleaning, delivery, and graphic design. React-based with Firebase backend.",
    image: "https://api.url2png.com/v6/P4DF2F8BC83648/b20bdfd4f1e83ed162e2ceb3b128fc2b/png/?thumbnail_max_width=851&url=https://cight.netlify.app&viewport=1280x2000",
  },
  {
    title: "Alexader David Brand",
    type: "React",
    tech: "React, Firebase",
    live: "https://fir-class-a1dcc.web.app",
    github: "#",
    desc: "Fashion website for AlexanderDavidBrand with dynamic product display and Firebase auth.",
    image: "https://api.url2png.com/v6/P4DF2F8BC83648/53ef29a564259571d4f0c58004ab65a1/png/?thumbnail_max_width=851&url=https://fir-class-a1dcc.web.app&viewport=1280x2000",
  },
  {
    title: "LyonMart",
    type: "General",
    tech: "React, Node.js",
    live: "https://lyonmart.netlify.app",
    github: "https://github.com/Diekodavidd/AlexEmpire.git",
    desc: "A full e-commerce platform allowing users to buy anything and everything, built with React and Node.",
    image: "https://api.url2png.com/v6/P4DF2F8BC83648/efa531509d0c782c733c97a13fc25d7a/png/?thumbnail_max_width=851&url=https://lyonmart.netlify.app/&viewport=1280x2000",
  },
];

const Section = styled.section`
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
  cursor: pointer;
  transform-style: preserve-3d;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 380px;

  &:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 0 20px rgba(212, 175, 55, 0.25);
  }

  &:hover .card-content {
    transform: rotateY(180deg);
  }

  /* Card flip effect */
  .card-content {
    transition: transform 0.6s ease;
    transform-style: preserve-3d;
     position: relative;
     width: 100%;
     height: 100%;
  }
 .card-front,
  .card-back {
    backface-visibility: hidden;
    position: absolute;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }

  /* Front side */
  .card-back {
    display: block;
    /* Your previous content for the front card (text, description) */
    text-align: left;
    color: #fff;
  }

  /* Back side (flipped view) */
  .card-front {
  
    display: block;
    transform: rotateY(180deg);
  background: #1f1f1f;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden; /* Ensure content inside doesn't overflow */
  }

  /* Optional: if you want to show an image or demo preview on the back */
.card-back img {
  width: 100%;
  height: 100%;
 object-fit: cover; /* Ensures the image stays in the card without stretching or distorting */
  object-position: top; /* Start the image from the top */
  border-radius: 8px;
}
  
`;

const ProjectTitle = styled.h3`
  color: #fff;
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`;
const ProjectTitled = styled.h3`
  color: #fff;
  font-size: 1.4rem;
  margin-bottom: 0rem;
  margin-top: 0.7rem;
  text-align: center;
  font-weight: bold;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
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
      {/* This div will hold the cursor trail */}
      <CursorTrailEffect />
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
            <div className="card-content">
              <div className="card-back">
              <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                  {/* Dynamically load the image based on the project data */}
                  <img src={proj.image} alt={`${proj.title} Demo`} /> </div>
                  <ProjectTitled>{proj.title}</ProjectTitled>
              </div>
              <div className="card-front">
              <ProjectTitle>{proj.title}</ProjectTitle>
                <Type>{proj.type}</Type>
                <Description>{proj.desc}</Description>
                <TechUsed>{proj.tech}</TechUsed>
                <Buttons>
                  <a href={proj.live} target="_blank" rel="noreferrer">Live Demo</a>
                  <a href={proj.github} target="_blank" rel="noreferrer">GitHub</a>
                </Buttons>
              </div>
            </div>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default Projects;