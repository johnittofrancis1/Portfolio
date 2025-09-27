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
                            <div id="About" className='section-mid'>
                                <div className="section-header">
                                    <div className="heading-mid text-whitesmoke"><span className="text-neon">01. </span>About Me</div>
                                    <div className="horizontal-line"></div>
                                </div>
                                <div className={`abt-body ${mobile ? "mobile": ""}`}>
                                    <p id="abt-content" className="text-large text-ash font-sans">
                                        I’m a backend engineer at <span className="text-neon">Zoho</span>, working with the <span className="text-neon">IAM</span> team to build secure and reliable systems that people actually depend on. I love diving into complex problems, optimizing performance, and designing APIs and services that just work—smooth, fast, and scalable.
                                        <br></br>
                                        Outside work, I’m curious and hands-on—experimenting with projects, exploring new tech, and finding creative ways to make software smarter and easier to use. For me, coding isn’t just lines of code; it’s about building tools and experiences that actually help people.
                                     </p>
                                    <div id="abt-photo">
                                        <div className="img-frame"></div>
                                        <ImageWrapper width="500" height="520" src={require("../images/passport.jpeg")} alt="passport" />
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