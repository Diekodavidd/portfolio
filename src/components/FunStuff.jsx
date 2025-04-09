import React from 'react';
import styled from 'styled-components';
import { FaMusic, FaFilm, FaSwimmer, FaGamepad, FaChess, FaRobot, FaPizzaSlice, FaTv, FaDumbbell, FaDog } from 'react-icons/fa';
import CubeShowcase from './CubeShowcase';

const FunWrapper = styled.section`
 
  color: #F5F5F5;
  padding: 6rem 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.accent};
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Subtext = styled.p`
  font-size: 1.25rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.accent};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 2rem;
  justify-items: center;
`;

const FunIcon = styled.div`
  background-color: #111111;
  border: 2px solid #1F3B73;
  border-radius: 20px;
  padding: 1.5rem;
  font-size: 2rem;
  color: ${({ theme }) => theme.accent};
  transition: all 0.3s ease;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 15px #D4AF37;
    color: #D4AF37;
    border-color: #D4AF37;
  }
`;

const FunStuff = () => {
  return (
    <FunWrapper id="fun">
      <Title>Stuff I Love</Title>
      <Subtext>
        A glimpse into what fuels my creativity and joy beyond the code.
      </Subtext>
      <Grid>
        <FunIcon><FaMusic /></FunIcon>
        <FunIcon><FaFilm /></FunIcon>
        <FunIcon><FaSwimmer /></FunIcon>
        <FunIcon><FaGamepad /></FunIcon>
        <FunIcon><FaChess /></FunIcon>
        <FunIcon><FaRobot /></FunIcon>
        {/* <FunIcon><FaPizzaSlice /></FunIcon> */}
        {/* <FunIcon><FaTv /></FunIcon> */}
        <FunIcon><FaDumbbell /></FunIcon>
        <FunIcon><FaDog /></FunIcon>
      </Grid>

      {/* WOW FACTOR: 3D Rotating Cube */}
      <CubeShowcase />
    </FunWrapper>
  );
};

export default FunStuff;
