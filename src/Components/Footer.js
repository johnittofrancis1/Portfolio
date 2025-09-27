import React, { Fragment } from 'react';
import Media from 'react-media';

import SocialBar from './SocialBar';

class Footer extends React.Component
{
    render()
    {
        return (
            <Media query={{maxWidth: 800}} >
                { 
                    mobile => {
                        if (mobile)
                            return (
                                <footer>
                                    <SocialBar mobile />
                                    <div className='text-small' id="footer-text">Designed and built by Johnitto Francis</div>
                                </footer>
                            );
                        else
                            return (
                                <footer>
                                    <div className='text-small' id="footer-text">Designed and built in React by Johnitto Francis</div>
                                </footer>
                            );
                    }
                }
            </Media>
        );
    }
}

export default Footer;