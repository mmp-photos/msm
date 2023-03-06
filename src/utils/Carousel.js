import React from 'react';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/carouselStyle.css';
import developer01 from '../assets/images/portfolio/developer01.png';
import developer02 from '../assets/images/portfolio/developer02.png';
import marketer02 from '../assets/images/portfolio/marketing02.png';
import marketer01 from '../assets/images/portfolio/marketing01.png';
import content01 from '../assets/images/portfolio/content01.png';
import content02 from '../assets/images/portfolio/content02.png';

const Carousel = (slideDeck) => {
    // DETERMINE THE CAROUSEL IMAGES TO USE BASED ON THE URL //
    const navigate = useNavigate();

    let slides =[];

    switch(slideDeck.slides.slides){
        case "developer":{
            slides.push({ image:  developer02, 
                params: "googlyPress",
                order: 0
               },
              { image:  developer01, 
                params: "angerGenerator",
                order: 1
               });
            //console.log(slides);
            break;
        }
        case "marketer": {
            slides.push({ image:  marketer01, 
                params: "smallGods",
                order: 0
               },
              { image:  marketer02, 
                params: "termsAndConditions",
                order: 1
               });
            break;
        }
        case "content":{
            slides.push({ image:  content02, 
                params: "gatsbyCologne",
                order: 0
               },
              { image:  content01, 
                params: "giantsOfMassAve",
                order: 1
               });
            break;
        }
        default:{
            slides.push({ image:  developer02, 
                params: "googlyPress",
                order: 0
               },
              { image:  developer01, 
                params: "angerGenerator",
                order: 1
               });
            break;
        }
    };

    const [current, setCurrent] = useState(0);
    const carouselBackground = useRef();

    // NAVIGATE TO PREVIOUS SLIDE //
    const prevSlide = (e, slideLength) => {
        e.stopPropagation();
        let total = slideLength - 1;
        const newTotal = current === 0 ? total : current - 1;
        //console.log(newTotal)
        setCurrent(newTotal);
    };

    // NAVIGATE TO PREVIOUS SLIDE //
    const nextSlide = (e, slideLength) => {
        e.stopPropagation();
        let total = slideLength - 1;
        const newTotal = current === total ? 0 : current + 1;
        //console.log(newTotal)
        setCurrent(newTotal);
    };

    // RETURN THE CAROUSEL ELEMENT //
    return (
        <>
            <div role="button" ref={carouselBackground} className='main-slide' onClick={() => navigate(`/portfolio/${slides[current].params}`)} style={{backgroundImage: `url(${slides[current].image})`}}>
                <div className="slide-prev" onClick = {(event) => prevSlide(event , slides.length)}><i className="fa-solid fa-angle-left"></i></div>
                <div className="slide-next" onClick = {(event) => nextSlide(event, slides.length)}><i className="fa-solid fa-angle-right"></i></div>
            </div>
        </>
    );
};

export default Carousel;
