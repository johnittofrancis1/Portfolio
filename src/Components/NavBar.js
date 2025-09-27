import React, { Fragment } from 'react';
import Media from 'react-media';
import { ReactSVG } from 'react-svg';

class NavBar extends React.Component
{
    state = {
        navList: {"About": "about", "Curriculum Vitae": "cv", "Work+Fun": "work", "Contact": "contact"},
        mobileNavOpen: false,
        appear: true,
        nonZeroState: false
    }

    componentDidMount()
    {
        var prevScrollpos = window.pageYOffset;
        window.onscroll = () => {
            var currentScrollPos = window.pageYOffset;
            if(currentScrollPos === 0)
                this.setState({nonZeroState: false});
            else
                this.setState({nonZeroState: true});
            if (prevScrollpos > currentScrollPos) {
                this.setState({appear: true});
            } else {
                this.setState({appear: false});
            }
            prevScrollpos = currentScrollPos;
        }
    }

    toggleMenu = () => {
        if (this.state.mobileNavOpen)
            document.body.style.overflow = null;
        else
            document.body.style.overflow = "hidden";
        this.setState({ mobileNavOpen: !this.state.mobileNavOpen });
    }

    renderNavList = () => {
        return Object.keys(this.state.navList).map( (item, index) => {
            let elementId = this.state.navList[item];
            return (
                <a key={index} className={`nav-item ${this.state.mobileNavOpen ? "heading-small": "text-small"}`} href={`#${elementId}`}>
                    <span className="text-neon">{("0" + (index+1)).slice(-2)}. </span>{item}
                </a>
            );
        });
    }

    render()
    {
        return (
            <header className={`${this.state.appear ? "appear": "hide"} ${this.state.nonZeroState ? "non-zero-state" : ""}`} >
                <nav className="nav-bar" >
                    <a className="logo" href="home" >
                        <ReactSVG src={require("../svgs/logo.svg").default} alt="logo" />
                    </a>
                    <Media onChange={() => this.setState({mobileNavOpen: false})} query={{minWidth: 801}} render={() => (
                        <div className="menu">
                            {this.renderNavList()}
                            <button onClick={() => window.open('https://drive.google.com/uc?export=download&id=1d7ev-lfuXYmgmOg3PTQ0zwAi1O_nVpy5', '_blank')} className="nav-item btn text-mid">Resume</button>
                        </div>
                    )} />
                    <Media onChange={() => this.setState({mobileNavOpen: false})} query={{maxWidth: 800}} render={() => (
                        <Fragment>
                            <div onClick={() => this.toggleMenu()} id={this.state.mobileNavOpen ? "cross-btn" : "burger-btn"} >
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                            </div> 
                            <div className={`vertical-menu ${this.state.mobileNavOpen ? "appear": "hide"}`}>
                                { this.renderNavList() }
                                <button onClick={() => window.open('https://drive.google.com/uc?export=download&id=1d7ev-lfuXYmgmOg3PTQ0zwAi1O_nVpy5', '_blank')} className="nav-item btn text-large large">Resume</button>
                            </div>
                        </Fragment>
                    )} /> 
                </nav>
                        { this.state.mobileNavOpen && <div style={{width: '100vw', height: '100vh', position: 'fixed',
                         top:0, left:0, right:0, bottom:0, backdropFilter: 'blur(5px)', zIndex: 3}}></div> }

            </header>
        );
    }
}

export default NavBar;