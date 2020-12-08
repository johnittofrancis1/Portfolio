import React from 'react';

import Home from './Home';
import About from './About';
import CurriculumVitae from './CurriculumVitae';
import Works from './Works';
import Contact from './Contact';
import Footer from './Footer';

class Content extends React.Component
{
    render()
    {
        return (
            <div className="content">
                <Home />
                <About />
                <CurriculumVitae />
                <Works />
                <Contact />
            </div>
        );
    }
}

export default Content;