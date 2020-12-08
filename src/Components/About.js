import React from 'react';
import Media from 'react-media';

import ImageWrapper from './ImageWrapper';

class About extends React.Component
{
    render()
    {
        return (
            <Media query={{maxWidth:800}} >
                {
                    mobile => {
                        return (
                            <div id="about">
                                <div className="section-header">
                                    <div className="heading-mid text-whitesmoke"><span className="text-neon">01. </span>About Me</div>
                                    <div className="horizontal-line"></div>
                                </div>
                                <div className={`abt-body ${mobile ? "mobile": ""}`}>
                                    <p id="abt-content" className="text-large text-ash font-sans">
                                        Hello! I'm Johnitto Francis J, a software engineer based in <span className="text-neon">Chennai, India.</span> <br /><br /> I enjoy developing projects whether that be applications, 
                                        ML models, websites or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.
                                        I am currently pursuing my <span className="text-neon">Computer Science Engineering</span> from <span className="text-neon">St.Joseph's College of Engineering.</span>
                                        I am expected to graduate in May, 2021.
                                    </p>
                                    <div id="abt-photo">
                                        <div className="img-frame"></div>
                                        <ImageWrapper src={require("../images/passport.jpg")} alt="passport" />
                                    </div> 
                                </div>
                            </div>
                        );
                    }
                }
            </Media>
        );
    }
}

export default About;