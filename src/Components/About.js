import React from 'react';

class Home extends React.Component
{
    render()
    {
        return (
            <div id="about" className="sections">
                <div className="section-header">
                    <div className="heading-mid text-whitesmoke mr-3"><span class="text-neon">01. </span>About Me</div>
                    <div className="horizontal-line"></div>
                </div>
                <div id="abt-body">
                    <p id="abt-content" className="text-large text-ash">
                        Hello! I'm Johnitto Francis J, a software engineer based in <span className="text-neon">Chennai, India.</span> I enjoy developing projects whether that be applications, 
                        ML models, websites or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.
                        I am currently pursuing my <span className="text-neon">Computer Science Engineering</span> from <span class="text-neon">St.Joseph's College of Engineering.</span>
                        I am expected to graduate in May, 2021.
                    </p>
                    <div id="abt-photo">
                        <div className="img-wrapper">
                            <img id="passport" src={require("../images/passport.jpg")} alt="passport"/>
                            <div className="filter-neon"></div>
                            <div className="img-frame"></div>
                        </div>
                    </div> 
                </div>
            </div>
        );
    }
}

export default Home;