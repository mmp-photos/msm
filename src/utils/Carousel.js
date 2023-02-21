import React from 'react';
import { useState, useRef } from 'react';
import '../assets/styles/carouselStyle.css';
import developer01 from '../assets/images/portfolio/developer01.png';
import developer02 from '../assets/images/portfolio/developer02.png';
import marketer02 from '../assets/images/portfolio/marketing02.png';
import marketer01 from '../assets/images/portfolio/marketing01.png';
import content01 from '../assets/images/portfolio/content01.png';
import content02 from '../assets/images/portfolio/content02.png';

const Carousel = (slideDeck) => {
    console.log('Need to committ');
    // DETERMINE THE CAROUSEL IMAGES TO USE BASED ON THE URL //
    let developerSlides = [developer01, developer02];
    let marketerSlides = [marketer01, marketer02];
    let contentSlides = [content01, content02];
    let slides =[];

    switch(slideDeck.slides.slides){
        case "developer":{
            slides.push(developer01, developer02);
            break;
        };
        case "marketer": {
            slides.push(marketer01, marketer02);
            break;
        }
        case "content":{
            slides.push(content01, content02);
            break;
        }
    }

    const [current, setCurrent] = useState(0);
    const carouselBackground = useRef();

    // NAVIGATE TO PREVIOUS SLIDE //
    const prevSlide = (slideLength) => {
        let total = slideLength - 1;
        const newTotal = current === 0 ? total : current - 1;
        //console.log(newTotal)
        setCurrent(newTotal);
    };

    // NAVIGATE TO PREVIOUS SLIDE //
    const nextSlide = (slideLength) => {
        let total = slideLength - 1;
        const newTotal = current === total ? 0 : current + 1;
        //console.log(newTotal)
        setCurrent(newTotal);
    };

    // RETURN THE CAROUSEL ELEMENT //
    return (
        <>
            <div ref={carouselBackground} className='main-slide' style={{backgroundImage: `url(${slides[current]})`}}>
                <div className="slide-prev" onClick = {() => prevSlide(slides.length)}><i className="fa-solid fa-angle-left"></i></div>
                <div className="slide-next" onClick = {() => nextSlide(slides.length)}><i className="fa-solid fa-angle-right"></i></div>
            </div>
        </>
    );
};

export default Carousel;
