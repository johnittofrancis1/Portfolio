import React from 'react';

class Home extends React.Component
{
    render()
    {
        return (
            <div className="home">
                <p className="text-neon">Hi, my name is</p>
                <div className="heading-large text-whitesmoke">Johnitto Francis. J</div>
                <div className="heading-large text-ash">I am a Software Developer</div>
                <p style={{width: '50%'}} className="text-large text-ash">
                    I am focused primarily on Backend work but also interested in Mobile Application Development, Machine Learning and Computer Vision.
                </p>
                <a href="mailto:johnittofrancis46@gmail.com">
                    <button className="btn btn-large">Get in Touch</button>
                </a>
            </div>
        );
    }
}

export default Home;