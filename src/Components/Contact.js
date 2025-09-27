import React from 'react';

class Contact extends React.Component
{
    render()
    {
        return (
            <div id="contact" className="sections">
                <div className="text-mid text-neon">04. What's next?</div>
                <div className="heading-mid text-whitesmoke text-center">Open to New Opportunities</div>
                <div className="text-ash text-mid text-center">
                I’m always excited to explore challenging roles where I can grow, contribute, and build impactful software. Feel free to reach out—I’m happy to connect and chat about opportunities.
                </div>
                <a href="mailto:johnittofrancis46@gmail.com">
                    <button className="btn large text-large section-small">Say Hello</button>
                </a>
            </div>
        );
    }
}

export default Contact;