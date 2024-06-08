"use client"
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './css/PageFlip.css'
import Landing from '../home/page'
import Chef from '../chef/page'

const PageFlip: React.FC = () => {
    const siteRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const newContentRef = useRef<HTMLDivElement>(null);
    const [isFlipped, setIsFlipped] = useState(false);
    const [siteW, setSiteW] = useState(400);
    const [siteH, setSiteH] = useState(400);

    useEffect(() => {

        function handleResize() {
            setSiteW(window.innerWidth)
            setSiteH(window.innerHeight)
        }

        document.querySelectorAll('p').forEach((p) => {
            p.style.lineHeight = `${siteH}px`;
        });

        gsap.set(siteRef.current, { perspective: 5000 });
        gsap.set(containerRef.current, { transformStyle: 'preserve-3d', transformOrigin: '-0% 50%' });
        gsap.set(newContentRef.current, { rotationY: 90, z: -siteW / 2, x: siteW / 2 });

        window.addEventListener('resize', handleResize)
    }, [siteH, siteW]);



    const handleClick = () => {
        const siteW = window.innerWidth;

        const tlFlip = gsap.timeline();

        if (!isFlipped) {
            tlFlip
                .to(siteRef.current, { scale: 0.6, duration: 0.5, ease: 'power2.inOut' }, 'start')
                .to(containerRef.current, { rotationY: -90, z: -siteW, x: -siteW, left: siteW , duration: 0.4, ease: 'power2.inOut' }, 'start+=0.7')
                .to(siteRef.current, { scale: 1, duration: 0.5, ease: 'power2.inOut'}, 'start+=1.2')
        } else {
            tlFlip
                .to(siteRef.current, { scale: 0.6, duration: 0.5, ease: 'power2.inOut' }, 'start')
                .to(containerRef.current, { rotationY: 0, z: 0, duration: 0.4, ease: 'power2.inOut' }, 'start+=0.7')
                .to(siteRef.current, { scale: 1, duration: 0.5, ease: 'power2.inOut' }, 'start+=1.2');
        }

        setIsFlipped(!isFlipped);
    };

    return (
        <div className="site" ref={siteRef}>
            <div className="container" ref={containerRef}>
                <div className="page-content">
                    <Landing flip={handleClick} />
                </div>
                <div className="page-content" id="new-content" ref={newContentRef}>
                    <Chef flip={handleClick} />
                </div>
            </div>
        </div>
    );
};

export default PageFlip;


