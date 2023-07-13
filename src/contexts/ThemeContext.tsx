import React from 'react'

interface ThemeContextProps {
    isDarkMode : boolean;
    setIsDarkMode : React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeContext = React.createContext<ThemeContextProps>({
    isDarkMode : false,
    setIsDarkMode : () => {}
});

export default ThemeContext;