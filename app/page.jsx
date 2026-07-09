"use client";
import { HomePage } from "../src/views/HomePage";
import { useHeroBright } from "../src/components/HeroBrightContext";

export default function Page() {
  const { setIsHeroBright } = useHeroBright();
  return <HomePage setIsHeroBright={setIsHeroBright} />;
}
