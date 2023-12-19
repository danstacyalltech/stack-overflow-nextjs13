"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface ThemeContextType {
  mode: string;
  setMode: (mode: string) => void;
}

// We create a context and assign it to a variable.
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Here, we create a custom hook that provides context value to its children
// Since this is a provider for our app, and we want to pass the context to the children of the app, we have to define children as a prop.
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState("");

  // Here we create a function that will handle the theme change.
  const handleThemeChange = () => {
    if (mode === "dark") {
      setMode("light");
      document.documentElement.classList.add("light");
    } else {
      setMode("dark");
      document.documentElement.classList.remove("dark");
    }
  };

  // This tells the app to call the handleThemeChange function every time the mode changes.
  // useEffect(() => {
  //   handleThemeChange();
  // }, [mode]);

  // Every provider has to return something, and almost always it is the context value.
  // Whatever we pass to the value prop, will be available to all children components globally.
  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Here we export a function that will use the useContext hook to access whatever value we passed to the context and return it.
export function useTheme() {
  // Here we created a variable called context and assigned it the value of the useContext hook.
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
