import React, { createContext } from "react";
import { theme } from "./theme";

type ProviderType = {
  children: React.ReactNode;
};
export const ThemeContext = createContext(theme);

function ThemeProvider({ children }: ProviderType) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

export default ThemeProvider;
