import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaMusic, FaSwimmer, FaChess, FaGamepad, FaDog, FaDumbbell } from 'react-icons/fa';

const CubeWrapper = styled.div`
  perspective: 1000px;
  margin-top: 6rem;
  display: flex;
  justify-content: center;
`;

const Cube = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;
  animation: rotateCube 12s infinite linear;

  @keyframes rotateCube {
    0% { transform: rotateX(0deg) rotateY(0deg); }
    25% { transform: rotateX(180deg) rotateY(0deg); }
    50% { transform: rotateX(180deg) rotateY(180deg); }
    75% { transform: rotateX(360deg) rotateY(180deg); }
    100% { transform: rotateX(360deg) rotateY(360deg); }
  }
`;

const Face = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  background: #0B0C2A;
  color: #D4AF37;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  border: 2px solid #D4AF37;
  box-shadow: inset 0 0 20px rgba(212, 175, 55, 0.2);

  ${({ face }) => face === 'front' && `transform: rotateY(0deg) translateZ(100px);`}
  ${({ face }) => face === 'back' && `transform: rotateY(180deg) translateZ(100px);`}
  ${({ face }) => face === 'right' && `transform: rotateY(90deg) translateZ(100px);`}
  ${({ face }) => face === 'left' && `transform: rotateY(-90deg) translateZ(100px);`}
  ${({ face }) => face === 'top' && `transform: rotateX(90deg) translateZ(100px);`}
  ${({ face }) => face === 'bottom' && `transform: rotateX(-90deg) translateZ(100px);`}
`;

const CubeShowcase = () => {
  return (
    <CubeWrapper>
      <Cube>
        <Face face="front"><FaMusic /></Face>
        <Face face="back"><FaSwimmer /></Face>
        <Face face="right"><FaChess /></Face>
        <Face face="left"><FaGamepad /></Face>
        <Face face="top"><FaDumbbell /></Face>
        <Face face="bottom"><FaDog /></Face>
      </Cube>
    </CubeWrapper>
  );
};

export default CubeShowcase;
