"use client";
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { cn } from '../lib/utils';
export function BlurText({ text, className, delay = 100, staggerMs = 200 }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const words = text.split(' ');
    return (<div ref={ref} className={cn("inline-flex flex-wrap", className)}>
      {words.map((word, i) => (<motion.span key={`${word}-${i}`} className="inline-block whitespace-pre" initial={{ filter: 'blur(10px)', opacity: 0, y: 50 }} animate={isInView
                ? {
                    filter: ['blur(10px)', 'blur(5px)', 'blur(0px)'],
                    opacity: [0, 0.5, 1],
                    y: [50, -5, 0],
                }
                : {}} transition={{
                duration: 0.35 * 2, // approximation of 0.35s per keyframe step?
                times: [0, 0.5, 1], // keyframe timings
                ease: "easeOut",
                delay: (delay + i * staggerMs) / 1000,
            }}>
          {word}&nbsp;
        </motion.span>))}
    </div>);
}
