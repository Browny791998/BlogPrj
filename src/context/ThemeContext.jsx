"use client"
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();
const getFormLocalStorage = () => {
    if(typeof window !== 'undefined') {
        const value = localStorage.getItem("theme");
        return value || "light";
    }
};

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState( () => {
        return getFormLocalStorage();
    });

    useEffect(() => {
        localStorage.setItem( "theme", theme);
    }, [theme]);

    const toggle = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }
    return <ThemeContext.Provider value={ {theme, toggle}}>{children}</ThemeContext.Provider>
}