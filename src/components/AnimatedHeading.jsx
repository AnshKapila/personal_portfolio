"use client";
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
const Cursor = () => (<motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }} className="inline-block w-[3px] h-[0.8em] bg-current ml-2 mb-[0.1em]"/>);
export function AnimatedHeading({ text, className, typingSpeed = 50, deletingSpeed = 30, pauseDuration = 3000, initialDelayMs = 200, }) {
    const [visibleCount, setVisibleCount] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    const [isPaused, setIsPaused] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const lines = text.split('\n');
    const totalChars = lines.reduce((acc, line) => acc + line.length, 0);
    useEffect(() => {
        const timer = setTimeout(() => {
            setHasStarted(true);
        }, initialDelayMs);
        return () => clearTimeout(timer);
    }, [initialDelayMs]);
    useEffect(() => {
        if (!hasStarted || isPaused)
            return;
        const timeout = setTimeout(() => {
            if (isTyping) {
                if (visibleCount < totalChars) {
                    setVisibleCount(prev => prev + 1);
                }
                else {
                    setIsPaused(true);
                    setTimeout(() => {
                        setIsPaused(false);
                        setIsTyping(false);
                    }, pauseDuration);
                }
            }
            else {
                if (visibleCount > 0) {
                    setVisibleCount(prev => prev - 1);
                }
                else {
                    setIsTyping(true);
                    setIsPaused(true);
                    setTimeout(() => {
                        setIsPaused(false);
                    }, 500); // 500ms pause before starting to type again
                }
            }
        }, isTyping ? typingSpeed : deletingSpeed);
        return () => clearTimeout(timeout);
    }, [visibleCount, isTyping, isPaused, hasStarted, totalChars, typingSpeed, deletingSpeed, pauseDuration]);
    return (<h1 className={cn(className)} style={{ letterSpacing: '-0.04em' }}>
      {lines.map((line, lineIndex) => {
            const lineStartIndex = lines.slice(0, lineIndex).reduce((sum, l) => sum + l.length, 0);
            const hasVisibleChars = visibleCount > lineStartIndex;
            // Hide entire line container if it hasn't started typing yet, unless it's line 0
            if (!hasVisibleChars && lineIndex !== 0)
                return null;
            return (<div key={lineIndex} className="whitespace-nowrap overflow-visible flex items-end min-h-[1.2em]">
            
            {/* Show cursor initially before typing starts on the first line */}
            {visibleCount === 0 && lineIndex === 0 && <Cursor />}
            
            {line.split('').map((char, charIndex) => {
                    const currentIndex = lineStartIndex + charIndex;
                    const isVisible = currentIndex < visibleCount;
                    const showCursor = isVisible && currentIndex === visibleCount - 1;
                    if (!isVisible)
                        return null;
                    return (<span key={currentIndex} className="inline-block relative">
                  {char === ' ' ? '\u00A0' : char}
                  {showCursor && <Cursor />}
                </span>);
                })}
          </div>);
        })}
    </h1>);
}
