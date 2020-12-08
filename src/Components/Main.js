import React from 'react';
import Media from 'react-media';

import Socialbar from './SocialBar';
import EmailBar from './EmailBar';
import Content from './Content';
import Footer from './Footer';

class Main extends React.Component
{
    render()
    {
        return (
            <Media query={{maxWidth: 800}} >
                { 
                    mobile => {
                        if (mobile)
                            return (
                                <div className="main">
                                    <Content />
                                    <Footer />
                                </div>
                            );
                        else
                            return (
                                <div className="main">
                                    <Content />
                                    <Socialbar />
                                    <EmailBar />
                                    <Footer />
                                </div>
                            );
                    }
                }
            </Media>
        );
    }
}

export default Main;