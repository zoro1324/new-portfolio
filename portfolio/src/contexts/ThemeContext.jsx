import React, { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

// Export the context for use in hooks
export { ThemeContext };

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Check for saved theme in localStorage or default to 'dark'
    const savedTheme = localStorage.getItem('portfolio-theme');
    return savedTheme || 'dark';
  });

  useEffect(() => {
    // Apply theme to document
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    
    // Save theme to localStorage
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  const setDarkTheme = () => setTheme('dark');
  const setLightTheme = () => setTheme('light');

  return (
    <ThemeContext.Provider value={{
      theme,
      toggleTheme,
      setDarkTheme,
      setLightTheme,
      isDark: theme === 'dark',
      isLight: theme === 'light'
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;