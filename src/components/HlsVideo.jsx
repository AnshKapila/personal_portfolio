"use client";
import { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import { cn } from '../lib/utils';
export function HlsVideo({ src, className, ...props }) {
    const videoRef = useRef(null);
    useEffect(() => {
        const video = videoRef.current;
        if (!video)
            return;
        if (Hls.isSupported()) {
            const hls = new Hls({
                startPosition: -1,
                capLevelToPlayerSize: true,
            });
            hls.loadSource(src);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                video.play().catch(() => {
                    // Ignore auto-play errors
                });
            });
            return () => {
                hls.destroy();
            };
        }
        else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            // For Safari where HLS is natively supported
            video.src = src;
            video.addEventListener('loadedmetadata', () => {
                video.play().catch(() => { });
            });
        }
    }, [src]);
    return (<video ref={videoRef} className={cn("absolute inset-0 w-full h-full object-cover", className)} muted playsInline loop {...props}/>);
}
