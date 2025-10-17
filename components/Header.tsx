"use client"

import '@/styles/Header.css'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';
import { RiContactsLine } from 'react-icons/ri';
import { MdClose } from 'react-icons/md';
import { useState, useEffect} from 'react';
import Link from 'next/link';


export default function Header(){

    const [isOn , setToggle] = useState<boolean>(false)
    const [showSvg, setShowSvg] = useState<boolean>(false);
    const handleToggle = () =>{
            setToggle(!isOn)
    }

    useEffect(() => {
        const elems = document.querySelectorAll('section[id], main[id]');
    
        if (!elems.length) return;
        if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

        const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    const id = entry.target.id;
                    const link = document.querySelector(`.nav__links a[href="#${id}"]`);
                    if (!link) return;
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.25) link.classList.add('active');
                    else link.classList.remove('active');
                });
            },
            { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: '-10% 0px -10% 0px'}
        );

        elems.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        
        const handleResize = () => {
            setShowSvg(window.innerWidth <= 990);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    useEffect(() => {
        const headerContainer  = document.querySelector('.header__container') as HTMLElement | null
        const header = document.querySelector('.header') as HTMLElement | null
        
        const handleScroll = () => {
            if (!headerContainer || !header) return;
            if (window.scrollY > 555) {
                headerContainer.style.position = 'fixed'
                headerContainer.style.backgroundColor = 'var(--header)'
                header.style.paddingBlock = '1rem'
                } 
            else{
                headerContainer.style.position = 'absolute'
                headerContainer.style.backgroundColor = 'unset'
                header.style.paddingBlock = ''
            }
        }
        window.addEventListener('scroll', handleScroll)

        return () => {window.removeEventListener('scroll', handleScroll)}
    }, [])

    return (
        <>
            <header className='header__container'>
                <div className='header'>
                    <div className='header__logo'>
                        <a href="#" className='logo__a'>
                            <FaMapMarkerAlt  size='1.9rem'/>
                            <span className='logo__name'>trav.com</span>
                        </a>
                    </div>

                    <nav className={`nav__links ${isOn ? 'active' : ''}`} id='nav-links'>
                        <ul>
                            <li><a href="#home">home</a></li>
                            <li><a href="#service">service</a></li>
                            <li><a href="#destination">destination</a></li>
                            <li><a href="#gallery">gallery</a></li>
                            <li><a href="#contact">contact</a></li>
                        </ul>
                    </nav>

                    <div className='btns'>                        
                        <RiContactsLine  className={`header__btn ${showSvg ? '' : 'hide'}`}/>
                        <div className={`tags ${showSvg ? 'hide' : ''}`}>
                            <button className='tag__login'>Log in</button>
                        </div>
                        
                        <div className='toggle__btns' onClick={handleToggle}>
                            {
                                isOn ? <MdClose       className={`header__btn ${showSvg ? '' : 'hide'}`}/> 
                                     : <AiOutlineMenu className={`header__btn ${showSvg ? '' : 'hide'}`}/>
                            }
                        </div>

                    </div>
                </div>
            </header>
        </>
    )
}