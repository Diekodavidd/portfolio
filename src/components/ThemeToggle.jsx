import React from 'react';

const ThemeToggle = ({ toggle, isDarkMode }) => {
  return (
    <button
      onClick={toggle}
      style={{
        background: 'none',
        border: '2px solid gold',
        color: 'gold',
        padding: '0.5rem 1rem',
        borderRadius: '20px',
        cursor: 'pointer'
      }}
    >
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
