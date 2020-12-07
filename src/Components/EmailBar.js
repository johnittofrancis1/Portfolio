import React from 'react';

class EmailBar extends React.Component
{
    render()
    {
        return (
            <div className="email-bar">
                <a className="text-large" id="email-id" href="mailto:johnittofrancis46@gmail.com">johnittofrancis46@gmail.com</a>
                <div style={{bottom: '0vh', position: 'fixed', right: '4.8vw'}} className="vertical-line"></div>
            </div>
        );
    }
}

export default EmailBar;