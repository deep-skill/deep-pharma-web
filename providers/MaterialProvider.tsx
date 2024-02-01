'use client'
// MaterialProvider.js
import { ThemeProvider } from "@material-tailwind/react";

const MaterialProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}

export default MaterialProvider;