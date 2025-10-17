"use client"

import '@/src/app/globals.css'
import Header from "@/components/Header";
import HomeComponent from "@/components/Home";
import Service from "@/components/Service";
import Destination from "@/components/Destination";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";


export default function Home() {

  useEffect(() => {
        const ScrollReveal = require("scrollreveal").default;
        const sr = ScrollReveal({
          distance: '50px',
          duration: 1000,
          reset: false, 
        });

        sr.reveal('.section__header', { 
            origin: 'bottom',
            interval: 600,
            delay: 300
        }); 

        sr.reveal('.section__description', { 
            origin: 'bottom',
            interval: 600,
            delay: 600
        }); 
    
        sr.reveal('.tour__search', { 
            origin: 'bottom',
            interval: 600,
            delay: 900
        }); 

        sr.reveal('.service__card', { 
            origin: 'bottom',
            interval: 600,
            delay:900,
            afterReveal: (el: HTMLElement) => {
              el.style.transform = '';   
              el.style.transition = '';  
            }
        }); 

        sr.reveal('.destination__card', { 
            origin: 'bottom',
            interval: 600,
            delay:900,
            afterReveal: (el: HTMLElement) => {
              el.style.transform = '';   
              el.style.transition = '';  
            }
        }); 

        sr.reveal('.gallery__card', { 
            origin: 'bottom',
            interval: 600,
            delay:900
        }); 

        sr.reveal('.contact__content', { 
            origin: 'bottom',
            interval: 600,
            delay:900
        }); 

        sr.reveal('footer', { 
            origin: 'bottom',
            interval: 600,
            delay:900
        }); 

    }, []); 

  return (
    <>
      <Header></Header>
      <HomeComponent></HomeComponent>
      <Service></Service>
      <Destination></Destination>
      <Gallery></Gallery>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}
