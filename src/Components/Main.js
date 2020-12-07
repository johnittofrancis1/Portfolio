import React from 'react';

import Socialbar from './SocialBar';
import EmailBar from './EmailBar';
import Content from './Content';

class Main extends React.Component
{
    render()
    {
        return (
            <div className="main">
                <Content />
                <Socialbar />
                <EmailBar />
            </div>
        );
    }
}

export default Main;