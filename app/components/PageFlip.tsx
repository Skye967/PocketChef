"use client"
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './css/PageFlip.css'
import Landing from './Landing';
import Chef from './Chef';

const PageFlip: React.FC = () => {
    const siteRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const firstContentRef = useRef<HTMLDivElement>(null);
    const newContentRef = useRef<HTMLDivElement>(null);
    const [isFlipped, setIsFlipped] = useState(false);
    const [siteW, setSiteW] = useState(0);
    const [siteH, setSiteH] = useState(0);
    const [page, setPage] = useState(true);

    useEffect(() => {

        function handleResize() {
            setSiteW(window.innerWidth)
            setSiteH(window.innerHeight)
        }

        handleResize()

        gsap.set(siteRef.current, { perspective: 5000 });
        gsap.set(containerRef.current, { transformStyle: 'preserve-3d', transformOrigin: '-0% 50%' });
        gsap.set(newContentRef.current, { rotationY: 90, z: -siteW / 2, x: siteW / 2 });

        window.addEventListener('resize', handleResize)
    }, [siteH, siteW, page]);



    const handleClick = () => {
        const siteW = window.innerWidth;

        const tlFlip = gsap.timeline();

        if (!isFlipped) {
            tlFlip
                .to(siteRef.current, { scale: 0.6, duration: 1, ease: 'power2.inOut' }, 'start')
                .to(containerRef.current, { rotationY: -90, z: -siteW, duration: 1, ease: 'power2.inOut' }, 'start+=0.7')
                .to(siteRef.current, { scale: 1, duration: 1, ease: 'power2.inOut' }, 'start+=1.2')
                .then(() => {
                    gsap.set(newContentRef.current, { rotationY: 0, z: siteW, x: 0, transformStyle: 'preserve-3d' });
                    gsap.set(firstContentRef.current, { rotationY: -90, z: siteW / 2, x: -siteW / 2, transformStyle: 'preserve-3d' });
                    gsap.set(containerRef.current, { rotationY: 0, transformStyle: 'preserve-3d' });
                })
        } else {
            gsap.set(newContentRef.current, { rotationY: 90, z: -siteW / 2, x: siteW / 2, transformStyle: 'preserve-3d' });
            gsap.set(firstContentRef.current, { rotationY: 0, z: 0, x: 0, transformStyle: 'preserve-3d' });
            gsap.set(containerRef.current, { rotationY: -90, z: -siteW , transformStyle: 'preserve-3d' });

            tlFlip
                .to(siteRef.current, { scale: 0.6, duration: 1, ease: 'power2.inOut' }, 'start')
                .to(containerRef.current, { rotationY: 0, z: 0, duration: 1, ease: 'power2.inOut' }, 'start+=0.7')
                .to(siteRef.current, { scale: 1, duration: 1, ease: 'power2.inOut' }, 'start+=1.2')
        }

        setIsFlipped(!isFlipped);
    };

    return (
        <div className="site" ref={siteRef}>
            <div className="container" ref={containerRef}>
                <div className="page-content" ref={firstContentRef}>
                    <Landing flip={handleClick}/>
                </div>
                <div className="page-content" id="new-content" ref={newContentRef}>
                    <Chef flip={handleClick}/>
                </div>
            </div>
        </div>
    );
};

export default PageFlip;


