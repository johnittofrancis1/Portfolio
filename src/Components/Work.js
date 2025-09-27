import React from 'react';
import { ReactSVG } from 'react-svg';
import Media from 'react-media';
import ImageWrapper from './ImageWrapper';

class Work extends React.Component
{
    renderTechList = () => {
    return this.props.techList.map((tech, i) => <div key={i} className="work-tech text-ash text-small">{ tech }</div>);
    }
    
    renderWork = (mobile = false) => {
        return (
            <div id="work" className={ `work ${this.props.reverse ? "reverse" : ""} ${mobile ? "mobile" : ""}` }>
                <div className="work-image">
                    <ImageWrapper dim={mobile} filterColor={mobile ? "#172a45b3" : "#64fedabf"} src={ this.props.imageSrc } />
                </div>
                <div className="work-content">
                    <div className="work-title">
                        <div className="text-small text-neon">{ this.props.titleTag }</div>
                        <div className="heading-mid text-whitesmoke">{ this.props.title }</div>
                    </div>
                    <div className="work-desc text-mid">
                        { this.props.desc }    
                    </div>
                    <div className="work-techs">
                        { this.renderTechList() }
                    </div>
                    <a href= { this.props.link } >
                        <ReactSVG beforeInjection={svg => svg.classList.add("work-link-icon")} src={require("../svgs/github.svg").default} />
                    </a>
                </div>
            </div>
        );
    }

    render()
    {
        return (
            <Media queries={{ mobile: {maxWidth: 800}, desktop: {minWidth: 801} }} >
                {
                    matches => this.renderWork(matches.mobile)
                }
            </Media>
        );
    }
}

export default Work;