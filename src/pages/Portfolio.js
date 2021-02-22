import React from 'react';
import Navigation from '../components/Navigation';
import ProjectList from '../components/portfolio/ProjectList';

const Portfolio = () => {
    return (
        <div className="portfolio">
            <Navigation />
            {/* <div className="text-bg">Portfolio</div> */}
            {/* <div className="portfolio-content">
                <h1>hello depuis portfolio</h1>
            </div> */}
            <ProjectList />
        </div>
    );
};

export default Portfolio;