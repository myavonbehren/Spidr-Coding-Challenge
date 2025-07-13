import React, { useEffect, useRef } from 'react';
import ParticleBackground from './ParticleBackground';

export function AnimatedBackground() {
    const canvasRef = useRef(null);
    const particleSystemRef = useRef(null);
    
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) {
            console.log('Canvas not ready yet');
            return;
        }
        
        const timer = setTimeout(() => {
            try {
                particleSystemRef.current = new ParticleBackground(canvas);
            } catch (error) {
                console.error('Failed to initialize particle system:', error);
            }
        }, 100);
        
        return () => {
            clearTimeout(timer);
            if (particleSystemRef.current) {
                particleSystemRef.current.destroy();
            }
        };
    }, []);
    
    return (
        <canvas
            ref={canvasRef}
            className="particle-canvas"
            style={{ background: '#262728' }}
        />
    );
}