// IMPORTS //
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import PORTFOLIO from '../assets/data/PORTFOLIO.js';
import PortfolioLi from '../features/portfolio/PortfolioLi';
import '../assets/styles/portfolioStyles.css';

const helmetContext = {};

// SET UP WORK PAGE FOR MSM CREATIVE WEBSITE //
const WorkPage = () => {
    return(
        <HelmetProvider context={helmetContext}>
        <Helmet>
            <title>Work | Matthew Mayer</title>
        </Helmet>
        <main id="portfolio">
            <h1 className="serif italic margin-2y">Projects</h1>
            <ul>
                {PORTFOLIO.map((item) => PortfolioLi(item))}
            </ul>
        </main>
        </HelmetProvider>
    )
}

// EXPORT HOMEPAGE ELEMENT //
export default WorkPage;