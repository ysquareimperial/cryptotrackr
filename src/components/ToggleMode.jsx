import React, { useState } from 'react';

const ToggleMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
    document.body.className = darkMode ? '' : 'dark-mode';
  };

  return (
    <button onClick={toggleMode}>
      {darkMode ? 'Switch to Day Mode' : 'Switch to Night Mode'}
    </button>
  );
};

export default ToggleMode;
