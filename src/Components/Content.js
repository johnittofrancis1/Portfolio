import React from 'react';

import Home from './Home';
import About from './About';
import CurriculumVitae from './CurriculumVitae';

class Content extends React.Component
{
    render()
    {
        return (
            <div className="content">
                <Home />
                <About />
                <CurriculumVitae />
            </div>
        );
    }
}

export default Content;