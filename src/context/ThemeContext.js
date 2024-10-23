import React, { createContext, useState } from 'react';
import defaultTheme from '../styles/theme1'; // The default theme (e.g., theme.js)
import synthTheme from '../styles/synththeme'; // The Synthwave theme (e.g., synththeme.js)

// Create a context for theme management
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(defaultTheme); // Default theme

    // Function to switch themes
    const toggleTheme = (themeName) => {
        switch (themeName) {
            case 'default':
                setTheme(defaultTheme);
                break;
            case 'synthwave':
                setTheme(synthTheme);
                break;
            default:
                setTheme(defaultTheme);
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
