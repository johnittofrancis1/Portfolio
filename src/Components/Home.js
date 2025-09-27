import React from 'react';

class Home extends React.Component
{
    render()
    {
        return (
            <div className="home section-large">
                <p className="text-neon text-mid">Hi, my name is</p>
                <div className="heading-large text-whitesmoke">Johnitto Francis. J</div>
                <div className="heading-large text-ash">I am a Software Developer</div>
                <p style={{width: '50%'}} className="text-large text-ash">
                working on IAM and backend systems. My current obsession? Cloud security, microservices, and building APIs that can scale effortlessly.
                </p>
                <a href="mailto:johnittofrancis46@gmail.com">
                    <button className="btn large text-large section-small">Get in Touch</button>
                </a>
            </div>
        );
    }
}

export default Home;