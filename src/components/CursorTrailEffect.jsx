// CursorTrailEffect.js
import React, { useEffect } from 'react';
import './CursorTrailEffect.css';  // Import the CSS for styling

const CursorTrailEffect = () => {
  useEffect(() => {
    const cursorTrail = document.getElementById('cursor-trail');
    let trail = [];

    // Handle mouse move event
    const mouseMoveHandler = (e) => {
      const trailDot = document.createElement('div');
      trailDot.classList.add('trail');
      trailDot.style.left = `${e.clientX - 5}px`;
      trailDot.style.top = `${e.clientY - 5}px`;

      // document.body.appendChild(trailDot);  // Append trail dot to the body
      cursorTrail.appendChild(trailDot);

      // Remove trail dot after animation ends
      setTimeout(() => {
        trailDot.remove();
        trail.shift();
      }, 500);  // Adjust time for the length of the trail
    };

    document.addEventListener('mousemove', mouseMoveHandler);

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);

  return <div id="cursor-trail"></div>;  // This is now globally applied
};

export default CursorTrailEffect;
