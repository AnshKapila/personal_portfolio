"use client";
import { createContext, useContext, useState } from "react";

const HeroBrightContext = createContext();

export function HeroBrightProvider({ children }) {
  const [isHeroBright, setIsHeroBright] = useState(false);
  return (
    <HeroBrightContext.Provider value={{ isHeroBright, setIsHeroBright }}>
      {children}
    </HeroBrightContext.Provider>
  );
}

export function useHeroBright() {
  return useContext(HeroBrightContext);
}
