import React from 'react';

import Home from './Home';
import About from './About';

class Content extends React.Component
{
    render()
    {
        return (
            <div className="content">
                <Home />
                <About />
            </div>
        );
    }
}

export default Content;