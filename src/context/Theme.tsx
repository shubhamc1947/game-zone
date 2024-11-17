import { createContext, ReactNode, useContext, useState } from "react";

type ThemeContextType = {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

type ThemeProviderType = {
    children: ReactNode;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useThemeContext must be used within a ThemeProvider");
    }
    return context;
}


export const ThemeProvider = ({ children }: ThemeProviderType) => {
    const [theme, setTheme] = useState<'light' | 'dark'>(
        () => localStorage.getItem('theme') as 'light' | 'dark' || 'light'
    );

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
            return newTheme;
        });
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}


