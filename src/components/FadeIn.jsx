"use client";
import { useEffect, useState } from 'react';
import { cn } from '../lib/utils'; // Assuming you have this alias or relative path
export function FadeIn({ children, delayMs = 0, durationMs = 1000, className }) {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delayMs);
        return () => clearTimeout(timer);
    }, [delayMs]);
    return (<div className={cn("transition-opacity", className)} style={{
            opacity: isVisible ? 1 : 0,
            transitionDuration: `${durationMs}ms`,
        }}>
      {children}
    </div>);
}
