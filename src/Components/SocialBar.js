import React  from 'react';
import { ReactSVG } from 'react-svg';

class SocialBar extends React.Component
{
    render()
    {
        return (
            <div className="social-bar">
                <ul className="icons">
                    <li>
                        <a href="https://www.instagram.com/johnittofrancis/" target="blank">
                            <ReactSVG beforeInjection={svg => svg.classList.add("social-icons")} src={require("../svgs/instagram.svg")} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/johnitto-francis-030861157/" target="blank">
                            <ReactSVG beforeInjection={svg => svg.classList.add("social-icons")} src={require("../svgs/linkedin.svg")} />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/johnittofrancis1" target="blank">
                            <ReactSVG beforeInjection={svg => svg.classList.add("social-icons")} src={require("../svgs/github.svg")} />
                        </a>
                    </li>
                </ul>
                <div style={{bottom: '0vh', position: 'fixed', left: '5vw'}} className="vertical-line"></div>
            </div>
        );
    }
}

export default SocialBar;