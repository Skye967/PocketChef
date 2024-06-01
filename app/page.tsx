'use client'
import './landing.css'
import Image from 'next/image';
import background from '../public/background/background.png'
import firstLayer from '../public/background/first.png'
import secondLayer from '../public/background/second.png'
import thirdLayer from '../public/background/third.png'
import fourthLayer from '../public/background/fourth.png'
import TextLoop from './components/TextLoop'
import { useEffect} from 'react';
import Link from 'next/link'

const Home = () => {

    useEffect(() => {
        let xValue = 0, yValue = 0;
        const handleMouseMove = (event: MouseEvent) => {
            xValue = event.clientX - window.innerWidth / 2;
            yValue = event.clientY - window.innerHeight / 2;

            const paralax_el = document.querySelectorAll(".paralax") as NodeListOf<HTMLElement>;
            paralax_el.forEach((el) => {
                let speedx = Number(el.dataset.speedx);
                let speedy = Number(el.dataset.speedy);
                el.style.transform = `translateX(calc(0% + ${xValue * speedx}px )) translateY(calc(0% + ${yValue * speedy}px))`;
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);


    return (
        <main>
            <Image
                src={background}
                alt="Picture of the author"
                data-speedx='0.3'
                data-speedy='0.3'
                className='paralax bg-img'
            />
            <Image
                src={firstLayer}
                alt="Picture of the author"
                data-speedx='0.05'
                data-speedy='0.05'
                className='paralax layer-1'
            />
            <Image
                src={secondLayer}
                alt="Picture of the author"
                data-speedx='0.1'
                data-speedy='0.1'
                className='paralax layer-2'
            />
            <Image
                src={thirdLayer}
                alt="Picture of the author"
                data-speedx='0.15'
                data-speedy='0.15'
                className='paralax layer-3'
            />
            <Image
                src={fourthLayer}
                alt="Picture of the author"
                data-speedx='0.2'
                data-speedy='0.2'
                className='paralax layer-4'
            />
            <div className='pocket paralax'>
                <h1 className='drop-shadow-[0_5.2px_5.2px_rgba(0,0,0,0.8)]'>PocketChef</h1>
            </div>
            <div className='text-loop '>
                <TextLoop />
            </div>
            <Link className='button-89' href="/landing">
                Try for free
                {/* <button className='button-89'>Try for free</button> */}
            </Link>


        </main>
    );
};

export default Home;


