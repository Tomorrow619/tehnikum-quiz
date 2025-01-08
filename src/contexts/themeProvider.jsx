import React, { useEffect, useState } from "react";
import { ThemeContext,themes } from "./themeContext";
import { useMemo } from "react";

export const ThemeProvider=({children})=>{
    const [themeValue, setThemeValue] = useState(themes.light) 
useEffect(()=>{
const persistedTheme = JSON.parse(localStorage.getItem("currentTheme")) 
if(persistedTheme){
    setThemeValue(persistedTheme)
}

},[themeValue]);
const toggleTheme = () => {
    setThemeValue((prev) =>
        prev === themes.light ? themes.dark : themes.light
)
}
const contextValue = useMemo(()=> {
    return {theme: themeValue, toggleTheme };

}, [themeValue, toggleTheme ]);

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    )
}