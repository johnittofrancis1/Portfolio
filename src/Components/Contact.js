import React from 'react';

class Contact extends React.Component
{
    render()
    {
        return (
            <div id="contact" className="sections">
                <div className="text-small text-neon">04. What's next?</div>
                <div className="heading-large text-whitesmoke">Get in Touch</div>
                <div className="text-ash text-small">
                    I am currently looking for any new opportunities, my inbox is always open.
                </div>
                <a href="mailto:johnittofrancis46@gmail.com">
                    <button className="btn large">Say Hello</button>
                </a>
            </div>
        );
    }
}

export default Contact;