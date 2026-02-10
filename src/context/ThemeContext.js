import React, { createContext, useState, useCallback } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = useCallback(() => {
    setIsDark(prev => !prev);
  }, []);

  const theme = {
    isDark,
    colors: isDark ? {
      bg: '#0f172a',
      card: '#1e293b',
      muted: '#94a3b8',
      accent: '#ffffff',
      text: '#f1f5f9',
      border: '#334155',
      glass: 'rgba(30, 41, 59, 0.6)',
      hover: '#475569',
    } : {
      bg: '#f7f6fc',
      card: '#ffffff',
      muted: '#7a7f87',
      accent: '#ffffff',
      text: '#0f172a',
      border: '#e2e8f0',
      glass: 'rgba(255,255,255,0.6)',
      hover: '#f1f5f9',
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
