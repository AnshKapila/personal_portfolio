"use client";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useHeroBright } from "./HeroBrightContext";

export function ClientLayout({ children }) {
  const { isHeroBright } = useHeroBright();
  return (
    <div className="relative w-full min-h-screen bg-black flex flex-col font-sans selection:bg-white/30 text-white">
      <Navbar isHeroBright={isHeroBright} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
